# Installing and Configuring the osm_label_server

## Installing

To install the osm_label_server download the latest
[release](https://github.com/trump-fmi/osm_label_server/releases) from
github. 

## First Test

After you extracted the tar.gz file, you can already start the
server with the contained default configuration by calling start.sh

```sh
./start.sh
```

To verify the server started correctly, open your browser at
http://localhost:8080/label/citynames?x_min=8&x_max=9&y_min=53&y_max=53.06&t_min=0.5
. This should give you the following json output, which might be
formatted differently depending on your browser:

``` json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 30349113,
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.7422973,
          53.051944500000005
        ]
      },
      "properties": {
        "lbl_fac": 12,
        "name": "Huchting",
        "osm": 30349113,
        "prio": 121,
        "t": 0.7067380674933035
      }
    },
    {
      "type": "Feature",
      "id": 169639811,
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.884310600000001,
          53.0555687
        ]
      },
      "properties": {
        "lbl_fac": 12,
        "name": "Hemelingen",
        "osm": 169639811,
        "prio": 129,
        "t": 0.7110280166713934
      }
    }
  ],
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  }
}
```

## Configuration

The most important configuration is contained in a json file. It
contains an array of endpoint and path names. Each path has to point
to a labelfile which was produced by the [Label
Pipeline](#/guide/label-pipeline). The name given to it will be the
endpoint under which the labels can be fetched by the front end.  An
Example config could look like this:

``` json
[{"name" : "citynames", "path" : "bremen-latest.osm.pbf.ce"},
 {"name" : "bicycle"  , "path" : "bicycle.ce" }]
```


The other configuration options can be set via command line parameters
and are described in the table below.

| Flag       | Default value | Explanation                                        |
|------------|---------------|----------------------------------------------------|
| -endpoints | default.json  | Path to the file with the endpoint configurations. |
| -port      | 8080          | Port where the socket is opened.                   |
| -root      | label         | Root endpoint for the label providing endpoints.   |

Unfortunately they do not work with the start script. When you execute
the binary directly you must ensure that either the lib folder of this
project is part of LD_LIBRARY_PATH or the library is installed in the
correct path for your distribution.
