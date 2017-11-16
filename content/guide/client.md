# Client



## Basic structure
The client consits of just one html-file that needs to be uploaded to a service/server of your choice.
The following template references all needed files via the rawgit-cdn and the official releases of openlayers.
Currentyl it's necessary to include the debug version of Open Layers due to the fact, that we don't use the closure-compiler to bundle everything in one file.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Your Title</title>
    <link rel="icon" type="image/x-icon" href="https://openlayers.org/assets/theme/img/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

    <link rel="stylesheet" href="https://openlayers.org/en/v4.3.4/css/ol.css" type="text/css">
    <link rel="stylesheet" href="https://cdn.rawgit.com/trump-fmi/ol-labels/d3fae0be/dist/ol-labels.css" type="text/css">
    <!-- The line below is only needed for old environments like Internet Explorer and Android 4.x -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
    <script src="https://openlayers.org/en/v4.3.4/build/ol-debug.js"></script>
    <script src="https://cdn.rawgit.com/trump-fmi/ol-labels/d3fae0be/dist/ol-labels.js"></script>
  </head>
  <body>
    <div id="map" class="map" style="height:100vh; width:100vw"></div>
    <script>
    
    </script>
  </body>
</html>
```

## Adding a Map Instance
Since we're extending the Open Layers framework, creating a map object is identical to any other Open Layers project:

```
var map = new ol.Map({
  loadTilesWhileAnimating: true,
  loadTilesWhileInteracting: true,
  layers: [],
  target: 'map'
});
```


## Adding Label Layers

Label Layers can be added either dynamically or manually. When you expose a collection of all possible tile and label endpoints your server is able to deliver use the following snippet to add all layers dynamically:

```
var labelCollectionUrl = http://YOURSERVER:PORT/labelCollections";

httpGET(labelCollectionUrl, function(response) {
        var endpointsJSON = JSON.parse(response);
        console.log(endpointsJSON);
        addLayersToMap(endpointsJSON);
      });
      
function addLayersToMap(endpoints) {
  // Add tile layers to map
  var tileEndpoints = endpoints.tileEndpoints;
  for (var i = 0; i < tileEndpoints.length; i++) {
    var tileEndpoint = tileEndpoints[i];
    var tileEndpointUrl = tileServerUrl + ":" + tileServerPort + tileEndpoint.uri + "{z}/{x}/{y}.png";
    var isLayerVisible = (tileEndpoint.name === "default");
    map.addLayer(
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: tileEndpointUrl
        }),
        title: tileEndpoint.name,
        description: tileEndpoint.description,
        preload: 5,
        visible: isLayerVisible
      })
    );
  }
  // Add label layers to map
  var labelEndpoints = endpoints.endpoints;
  for (var i = 0; i < labelEndpoints.length; i++) {
    var labelName = labelEndpoints[i];
    var labelEndpointUrl = labelServerUrl + ":" + labelServerPort + "/" + endpoints.pathPrefix + "/" + labelName;
    var isLayerVisible = (labelName === "citynames");
    map.addLayer(
      new ol.layer.Label({
        source: new ol.source.Label({
          url: labelEndpointUrl
        }),
        style: null,
        title: labelName,
        visible: isLayerVisible
      })
    );
  }
}

function httpGET(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}
```

Layers can also be added manually when creating the map object:

```
var map = new ol.Map({
  loadTilesWhileAnimating: true,
  loadTilesWhileInteracting: true,
  layers: [
    new ol.layer.Label({
      source: new ol.source.Label({
        url: YOUR_ENDPOINT
      }),
      style: null,
      title: YOUR_LAYER_TITLE,
      visible: true
    })
  ],
  target: 'map'
});
```

## Adding Contorls
Two new controls were added. A simple layer-menu to choose a combination of all available tile and label layers and a debug menu, to finetune settings while looking at actual data.

```
map.addControl(new ol.control.LabelDebug());
map.addControl(new ol.control.LayerMenu());
```

## CORS
Please be aware, that if your client is hosted on a different domain than your actual endpoints all label and tile endpoints need to provide CORS headers for the asynchronous requests to work.

For further information please take a closer look at the actual repository [ol-labels](https://github.com/trump-fmi/ol-labels)
