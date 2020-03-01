import { range } from '../layers/microscopy-viewer-layer/utils';

export class ZarrLoader {
  constructor(data, isRgb, scale, dimNames) {
    let base;
    if (Array.isArray(data)) {
      this.isPyramid = true;
      this._data = data;
      [base] = data;
    } else {
      this.isPyramid = false;
      base = data;
    }
    this._data = data;
    this.scale = scale;
    this.dimNames = dimNames;
    this.chunkIndex = Array(dimNames.length).fill(0);
    if (isRgb) {
      this.isMultiChannel = false;
      this.channelIndex = base.shape.length - 1;
      this.xIndex = base.shape.length - 2;
      this.yIndex = base.shape.length - 3;
    } else {
      this.isMultiChannel = true;
      this.xIndex = base.shape.length - 1;
      this.yIndex = base.shape.length - 2;
      this.channelIndex = base.shape.length - 3;
    }
    this.channelChunkSize = base.chunks[this.channelIndex];
    this.channelChunkIndices = [0];
  }

  get _base() {
    if (this.isPyramid) {
      return this._data[0]
    }
    return this._data;
  }

  get vivMetadata() {
    const imageHeight = this._base.shape[this.yIndex];
    const imageWidth =  this._base.shape[this.xIndex];
    const tileSize = this._base.chunks[this.xIndex];
    const minZoom = this.isPyramid ? -this._data.length : 0;
    return { imageWidth, imageHeight, tileSize, minZoom, scale: this.scale };
  }

  setChunkIndex(dimName, index) {
    const chunkIndex = [...this.chunkIndex];
    if (typeof dimName === 'string') {
      // Just change index across one axis
      const i = this.dimNames.indexOf(dimName);
      chunkIndex[i] = index;
    } else {
      // Multiple dimension names and indicies provided
      if (dimName.length !== index.length) {
        throw Error(`Dimension names and indicies must be same length when set together`);
      }
      for (let i = 0; i < dimName.length; i += 1) {
        const dimIndex = this.dimNames.indexOf(dimName);
        chunkIndex[dimIndex] = index[i];
      }
    }
  }

  async getTile({ x, y, z }) {
    const source = this.isPyramid ? this._data[z] : this._data;

    const chunkKey = [...this.chunkIndex];
    chunkKey[this.xIndex] = x;
    chunkKey[this.xIndex] = y;

    if (this.isRgb) {
      // Return one interleaved TypedArray
      const imageTile = await source.getRawChunk(chunkKey);
      return imageTile;
    }

    let tiles;
    // Return Array of TypedArrays
    if (this.channelChunkSize > 1) {
      const tile = await source.getRawChunk(chunkKey);
      tiles = source._decodeChannels(tile);
    } else {
      const tileRequests = this.channelChunkIndices.map(i => {
        chunkKey[this.channelIndex] = i;
        return this._data.getRawChunk(chunkKey)
      })
      tiles = await Promise.all(tileRequests);
    }
    return tiles;
  }

  _decodeChannels(chunkData) {
    // Used for multichannel images where channels are in same chunk.
    // Separates single TypedArray into multiple channel views.
    const offset = chunkData.length / this.channelChunkSize;
    const tileData = range(this.channelChunkSize).map(i =>
      chunkData.subarray(offset * i, offset * i + offset)
    );
    return tileData;
  }
}