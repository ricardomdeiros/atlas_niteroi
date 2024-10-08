var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Logradouros_1 = new ol.format.GeoJSON();
var features_Logradouros_1 = format_Logradouros_1.readFeatures(json_Logradouros_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Logradouros_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Logradouros_1.addFeatures(features_Logradouros_1);
var lyr_Logradouros_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Logradouros_1, 
                style: style_Logradouros_1,
                popuplayertitle: "Logradouros",
                interactive: true,
                title: '<img src="styles/legend/Logradouros_1.png" /> Logradouros'
            });
var group_CamadasdeNiteroi = new ol.layer.Group({
                                layers: [lyr_Logradouros_1,],
                                fold: "open",
                                title: "Camadas de Niteroi"});

lyr_GoogleHybrid_0.setVisible(true);lyr_Logradouros_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_CamadasdeNiteroi];
lyr_Logradouros_1.set('fieldAliases', {'fid': 'fid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'uf': 'uf', 'city': 'city', 'st_type': 'st_type', 'st_no': 'st_no', 'cmty_l': 'cmty_l', 'cmty_r': 'cmty_r', 'class': 'class', 'pavement': 'pavement', 'shape_leng': 'shape_leng', 'observ': 'observ', 'no_pop': 'no_pop', 'no_ant': 'no_ant', 'cod_arq': 'cod_arq', 'legislacao': 'legislacao', 'shape': 'shape', 'Data_abertura': 'Data_abertura', 'Data_Fechamento': 'Data_Fechamento', });
lyr_Logradouros_1.set('fieldImages', {'fid': 'TextEdit', 'objectid_1': 'Range', 'objectid': 'Range', 'uf': 'TextEdit', 'city': 'TextEdit', 'st_type': 'TextEdit', 'st_no': 'TextEdit', 'cmty_l': 'TextEdit', 'cmty_r': 'TextEdit', 'class': 'TextEdit', 'pavement': 'TextEdit', 'shape_leng': 'TextEdit', 'observ': 'TextEdit', 'no_pop': 'TextEdit', 'no_ant': 'TextEdit', 'cod_arq': 'TextEdit', 'legislacao': 'TextEdit', 'shape': 'TextEdit', 'Data_abertura': 'DateTime', 'Data_Fechamento': 'DateTime', });
lyr_Logradouros_1.set('fieldLabels', {'fid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'uf': 'no label', 'city': 'no label', 'st_type': 'no label', 'st_no': 'no label', 'cmty_l': 'no label', 'cmty_r': 'no label', 'class': 'no label', 'pavement': 'no label', 'shape_leng': 'no label', 'observ': 'no label', 'no_pop': 'no label', 'no_ant': 'no label', 'cod_arq': 'no label', 'legislacao': 'no label', 'shape': 'no label', 'Data_abertura': 'no label', 'Data_Fechamento': 'no label', });
lyr_Logradouros_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});