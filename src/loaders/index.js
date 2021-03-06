import { openArray } from 'zarr';
import { fromUrl } from 'geotiff';
import Pool from './Pool';
import ZarrLoader from './zarrLoader';
import OMETiffLoader from './OMETiffLoader';
import { getChannelStats } from './utils';
import OMEZarrReader from './omeZarrReader';

export async function createZarrLoader({
  url,
  dimensions,
  isPyramid,
  isRgb,
  scale,
  translate
}) {
  let data;
  if (isPyramid) {
    let metadata;
    if(typeof url === 'string'){
      const metadataUrl = `${url}${url.slice(-1) === '/' ? '' : '/'}.zmetadata`;
      const response = await fetch(metadataUrl);
      const md = await response.json();
      metadata = md.metadata;
    }
    else{
      const meta = await url.getItem('.zmetadata')
      const enc = new TextDecoder("utf-8");
      const md = JSON.parse(enc.decode(new Uint8Array(meta)));
      metadata = md.metadata;
    }
    const paths = Object.keys(metadata)
      .filter(metaKey => metaKey.includes('.zarray'))
      .map(arrMetaKeys => arrMetaKeys.slice(0, -7));
    data = await Promise.all(paths.map(path => openArray({ store: url, path })));
  } else {
    data = await openArray({ store: url });
  }
  return new ZarrLoader({
    data,
    dimensions,
    scale,
    translate,
    isRgb
  });
}

/**
 * This function wraps creating a ome-tiff loader.
 * @param {Object} args
 * @param {String} args.url URL from which to fetch the tiff.
 * @param {Array} args.offsets List of IFD offsets.
 * @param {Object} args.headers Object containing headers to be passed to all fetch requests.
 */
export async function createOMETiffLoader({ url, offsets = [], headers = {} }) {
  const tiff = await fromUrl(url, headers);
  const firstImage = await tiff.getImage(0);
  const pool = new Pool();
  const omexmlString = firstImage.fileDirectory.ImageDescription;
  return new OMETiffLoader({
    tiff,
    pool,
    firstImage,
    omexmlString,
    offsets
  });
}

export { ZarrLoader, OMETiffLoader, OMEZarrReader, getChannelStats };
