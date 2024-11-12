var wms_layers = [];

var format_Logradourosv10_0 = new ol.format.GeoJSON();
var features_Logradourosv10_0 = format_Logradourosv10_0.readFeatures(json_Logradourosv10_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Logradourosv10_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Logradourosv10_0.addFeatures(features_Logradourosv10_0);
var lyr_Logradourosv10_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Logradourosv10_0, 
                style: style_Logradourosv10_0,
                popuplayertitle: "Logradouros v1.0",
                interactive: true,
                title: '<img src="styles/legend/Logradourosv10_0.png" /> Logradouros v1.0'
            });

lyr_Logradourosv10_0.setVisible(true);
var layersList = [lyr_Logradourosv10_0];
lyr_Logradourosv10_0.set('fieldAliases', {'st_no': 'st_no', 'Data_Abert': 'Data_Abert', 'Data_Fecha': 'Data_Fecha', });
lyr_Logradourosv10_0.set('fieldImages', {'st_no': '', 'Data_Abert': '', 'Data_Fecha': '', });
lyr_Logradourosv10_0.set('fieldLabels', {'st_no': 'no label', 'Data_Abert': 'no label', 'Data_Fecha': 'no label', });
lyr_Logradourosv10_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});