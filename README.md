### vitessce-image-viewer ("Viv") [![npm version](https://badge.fury.io/js/%40hubmap%2Fvitessce-image-viewer.svg)](https://badge.fury.io/js/%40hubmap%2Fvitessce-image-viewer)

A viewer for high bit depth, high resolution, multi-channel images using DeckGL
over the hood and WebGL under the hood. To learn more about the "theory" behind
this, look at [this](https://github.com/hubmapconsortium/vitessce-image-viewer/blob/master/docs/IMAGE_RENDERING.md). To really make this sing, you need to
use an http2 server in production (s3 is passable, though).

### Use the viewer as an ImJoy plugin

You can install it into ImJoy: https://imjoy.io/#/app?plugin=https://oeway.github.io/vitessce-image-viewer/


There is also a Jupyter notebook extension for ImJoy (`pip install imjoy-jupyter-extension`), you can directly run the viewer in Jupyter notebooks, try it here: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gist/oeway/ebedc17c9ab1f6aa5eee181679d85b5f/master?filepath=vitessce-image-viewer-imjoy-demo.ipynb)

![](docs/Screenshot-imjoy-jupyter.png)

```python
from imjoy import api

covidTiffInfo = {
    "url": 'https://vitessce-demo-data.storage.googleapis.com/test-data/12448_G1HR_Mesh003.ome.tif',
    "dimensions": [
    {
      "field": 'channel',
      "type": 'nominal',
      "values": [0]
    },
    { "field": 'y', "type": 'quantitative', "values": None },
    { "field": 'x', "type": 'quantitative', "values": None }
  ],
  "selections": [{ "channel": 0 }],
  "isPublic": True,
  "isPyramid": True,
  "description": 'Covid-19 Primary Gut Epithelial Stem Cells (OME-TIFF)',
  "initialViewState": {
    "zoom": -7,
    "target": [50000, 50000]
  }
}
    
class ImJoyPlugin():
    async def setup(self):
        pass

    async def run(self, ctx):
        viewer = await api.createWindow(type="vitessce-image-viewer", src="https://oeway.github.io/vitessce-image-viewer/")
        await viewer.loadSource('covid tiff', covidTiffInfo)

api.export(ImJoyPlugin())
```

### Build

To build the component alone via `webpack` use `npm run-script build-component`.
To build the demo used for visual testing (seen on `npm start`), run
`npm run-script build-site`.

### Publish

To bump the version number, clean up/update the CHANGELOG.md, and push the tag to Github,
please run `npm version [major | minor | patch]` depending on which you want. Then run `./publish.sh` to publish the package/demo.

### Development

Please install the [Prettier plug-in](https://prettier.io/docs/en/editors.html)
for your preferred editor. (Badly formatted code will fail on Travis.)

For the demo, run `npm start` and you will be able to update the component and use the
`demo/src/App.js` to visually test.

For development,
HTTP is acceptable but potentially slower than HTTP2 for `TIFF`. However, for
development with `zarr`, you should use an [HTTP2 server](https://github.com/GoogleChromeLabs/simplehttp2server)
for best performance. Our demo
uses Google Cloud Storage, which is HTTP2 by default.

Due to [difficulties](https://github.com/hubmapconsortium/vitessce-image-viewer/issues/103) around compiling shaders on Travis, unit tests and layer lifecycle
tests are run locally as a pre-push hook. Travis runs a test build, linting, and prettier.

### Browser Support

Currently Safari lacks full WebGL2 support. The `Viv` component will display an error. To override the styling, add something like

```css
.viv-error p {
  color: red;
  margin: 15px;
}
```

### Documentation

Please navigate to [viv.vitessce.io/docs](http://viv.vitessce.io/docs) to see full documenation.
