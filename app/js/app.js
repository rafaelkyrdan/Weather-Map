
var App = ( function() {

    var context, coords, zoom, map, mapnik, el;
    var layers, mainLayer;
    el = "basicMap";
    zoom = 5;
    layers = [];

    //Addind maps

    function toggleLoadingView() {

        var el = context.querySelector( "div.loading" );
        var stateView = el.style.display;
        if ( stateView == "none" ){
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }

    }

    function getCoords () {

        var args = OpenLayers.Util.getParameters();
        if (args.lat && args.lon && args.zoom) {
            var position = new OpenLayers.LonLat(parseFloat(args.lon), parseFloat(args.lat));
            if(args.lon< 181 && args.lat < 181)
                position.transform(
                    new OpenLayers.Projection("EPSG:4326"),
                    new OpenLayers.Projection("EPSG:900913")
                );
            coords = position;
            zoom = parseFloat(args.zoom);
        } else {
            var lat = 50.4333, lon = 30.5167;
            var centre = new OpenLayers.LonLat(lon, lat);
            centre.transform(
                new OpenLayers.Projection("EPSG:4326"),
                new OpenLayers.Projection("EPSG:900913")
            );
            coords = centre;
            zoom = 5;
        }
    }

    return {

        addLayerTemp : function () {

            var layer_temp = new OpenLayers.Layer.XYZ(
                "temp",
                "http://${s}.tile.openweathermap.org/map/temp/${z}/${x}/${y}.png",
                {
                    isBaseLayer: false,
                    opacity: 0.7,
                    sphericalMercator: true
                }
            );

            layers = [mapnik, mainLayer, layer_temp];
            App.mainMap();
        },

        addLayerPessure : function () {

            var layer_pressure = new OpenLayers.Layer.XYZ(
                "pressure",
//                "http://${s}.tile.openweathermap.org/map/pressure/${z}/${x}/${y}.png",
                "http://${s}.tile.openweathermap.org/map/pressure_cntr/${z}/${x}/${y}.png",
                {
                    isBaseLayer: false,
                    opacity: 0.7,
                    sphericalMercator: true
                }
            );

            layers = [mapnik, mainLayer, layer_pressure];
            App.mainMap();
        },

        addLayerSnow : function () {

            var layer_snow = new OpenLayers.Layer.XYZ(
                "snow",
                "http://${s}.tile.openweathermap.org/map/snow/${z}/${x}/${y}.png",
                {
                    isBaseLayer: false,
                    opacity: 0.7,
                    sphericalMercator: true
                }
            );

            layers = [mapnik, mainLayer, layer_snow];
            App.mainMap();
        },

        addLayerWind : function () {

            var layer_wind = new OpenLayers.Layer.XYZ(
                "wind",
                "http://${s}.tile.openweathermap.org/map/wind/${z}/${x}/${y}.png",
                {
                    isBaseLayer: false,
                    opacity: 0.7,
                    sphericalMercator: true
                }
            );

            layers = [mapnik, mainLayer, layer_wind];
            App.mainMap();
        },

        addLayerRain : function () {

            var layer_rain = new OpenLayers.Layer.XYZ(
                "rain",
                "http://${s}.tile.openweathermap.org/map/rain/${z}/${x}/${y}.png",
//                "http://${s}.tile.openweathermap.org/map/rain_cls/${z}/${x}/${y}.png",
                {
                    isBaseLayer: false,
                    opacity: 0.7,
                    sphericalMercator: true
                }
            );

            layers = [mapnik, mainLayer, layer_rain];
            App.mainMap();
        },

        addLayerPrecipitation : function () {

            var layer_precipitation = new OpenLayers.Layer.XYZ(
                "precipitation",
                "http://${s}.tile.openweathermap.org/map/precipitation/${z}/${x}/${y}.png",
//                "http://${s}.tile.openweathermap.org/map/precipitation_cls/${z}/${x}/${y}.png",
                {
                    isBaseLayer: false,
                    opacity: 0.7,
                    sphericalMercator: true
                }
            );

            layers = [mapnik, mainLayer, layer_precipitation];
            App.mainMap();
        },

        addLayerCloud : function () {

            var layer_cloud = new OpenLayers.Layer.XYZ(
                "clouds",
                "http://${s}.tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png",
                {
                    isBaseLayer: false,
                    opacity: 0.7,
                    sphericalMercator: true
                }
            );


            layers = [mapnik, mainLayer, layer_cloud];
            App.mainMap();
        },

        mainMap : function (){

            context.querySelector( "#basicMap").innerHTML = "";

            map = new OpenLayers.Map(el);
            mapnik = new OpenLayers.Layer.OSM();
            map.addLayers(layers);
            getCoords();
            toggleLoadingView();
            map.setCenter(coords, zoom);

        },

        initMap : function () {

            context = document.querySelector( '.content' );

            context.querySelector( ".closeWindow" ).onclick = function ( e ) {
                win.close();
                return false;
            };

            context.querySelector( "a#cloud" ).onclick = function ( e ) {
                App.addLayerCloud();
                return false;
            };

            context.querySelector( "a#precipitation" ).onclick = function ( e ) {
                App.addLayerPrecipitation();
                return false;
            };

            context.querySelector( "a#rain" ).onclick = function ( e ) {
                App.addLayerRain();
                return false;
            };

            context.querySelector( "a#snow" ).onclick = function ( e ) {
                App.addLayerSnow();
                return false;
            };

            context.querySelector( "a#pressure" ).onclick = function ( e ) {
                App.addLayerPessure();
                return false;
            };

            context.querySelector( "a#temp" ).onclick = function ( e ) {
                App.addLayerTemp();
                return false;
            };

            context.querySelector( "a#wind" ).onclick = function ( e ) {
                App.addLayerWind();
                return false;
            };

            map = new OpenLayers.Map(el);
            mapnik = new OpenLayers.Layer.OSM();
            mainLayer = new OpenLayers.Layer.Vector.OWMWeather("Weather");
            map.addLayers([mapnik, mainLayer]);
            getCoords();
            toggleLoadingView();
            map.setCenter(coords, zoom);
        }
    };

})();




