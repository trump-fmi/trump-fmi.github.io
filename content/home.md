![trump-logo](https://rawgit.com/trump-fmi/trump-fmi.github.io/tree/master/content/logo_blue.png "Logo Title Text 1")

TRUMP (**T**ile **R**otating **U**niversal **M**ap **P**resentation) is a project that aims to bring rotation invariant vector labeling to map representations. The goal is to display the same labels to the viewer regardless of current rotation to benefit the user's ability to navigate.

## Introduction
The project consists of two parts. A HTML-Client and Server. Due to base features and extensibility, the client is based on the popular OpenLayers-Framework.

## Guides
We provide a installation guide for both the client and the server from a "from-scratch" perspective which results in a tile server based on a mapnik instance, the configuration of the preprocessing label pipeline, a apache webserver to serve requests and a small endpoint that delivers labels. For people currently running a classic tile-server and want to try out the labeling-software we provide a migration guide. It's also possible to run the label-endpoint on a different server than the tile-server but that would result in the need for separate osm-data database, so we strongly suggest to run the label-endpoints on the same server as the tile generation.

## Configurator
Since the configuration of the label preprocessing confronts the user with a plethora of configuration options we supply a small configuration utility with examples. Feel free to use the configurator to adjust the label preprocessing to your needs. When done with configuration you are presented with a button to download your configuration at the bottom. The resulting configuration includes a config file to run with the pipeline-script plus a configured client that can be viewed in any modern browsers.

## Project Description
The software presented on this website and the related github repositories of [client](https://github.com/trump-fmi/ol-labels) and the [label-server](https://github.com/trump-fmi/osm_label_server) were created in the context of a  software development student-project conducted at the university of Stuttgart. The papers [Growing Balls in RD](http://epubs.siam.org/doi/abs/10.1137/1.9781611974768.20) and [Crushing Discs Efficiently](https://link.springer.com/chapter/10.1007/978-3-319-44543-4_4) provide the underlying research and enable the preprocessing of OpenStreetMap data.

## Disclaimer
The naming of this project is purely based on the acronym of the project's goals. Any similarities to current foreign governmental entities is pure coincidence. 
