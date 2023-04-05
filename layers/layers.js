ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:27700").setExtent([-65619.590198, 55073.581668, 941879.564879, 688671.652796]);
var wms_layers = [];

var lyr_orengoSpNAbetweennesscentrality_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "orengo-SpNA-betweenness-centrality_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/orengoSpNAbetweennesscentrality_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:27700',
                                alwaysInRange: true,
                                imageExtent: [92631.695927, -632.671364, 675741.966878, 803352.702221]
                            })
                        });
var lyr_lewisedgebetweenness_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "lewis-edge-betweenness_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lewisedgebetweenness_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:27700',
                                alwaysInRange: true,
                                imageExtent: [110645.786875, -20483.173911, 673031.134458, 732369.355519]
                            })
                        });
var format_clippedengmap_2 = new ol.format.GeoJSON();
var features_clippedengmap_2 = format_clippedengmap_2.readFeatures(json_clippedengmap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_clippedengmap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedengmap_2.addFeatures(features_clippedengmap_2);
var lyr_clippedengmap_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clippedengmap_2, 
                style: style_clippedengmap_2,
                interactive: false,
                title: '<img src="styles/legend/clippedengmap_2.png" /> clipped-eng-map'
            });
var format_buffromanroads5km_3 = new ol.format.GeoJSON();
var features_buffromanroads5km_3 = format_buffromanroads5km_3.readFeatures(json_buffromanroads5km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_buffromanroads5km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffromanroads5km_3.addFeatures(features_buffromanroads5km_3);
var lyr_buffromanroads5km_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffromanroads5km_3, 
                style: style_buffromanroads5km_3,
                interactive: false,
                title: '<img src="styles/legend/buffromanroads5km_3.png" /> buff-roman-roads-5km'
            });
var format_Connected_Roman_Road_Network_4 = new ol.format.GeoJSON();
var features_Connected_Roman_Road_Network_4 = format_Connected_Roman_Road_Network_4.readFeatures(json_Connected_Roman_Road_Network_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Connected_Roman_Road_Network_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Connected_Roman_Road_Network_4.addFeatures(features_Connected_Roman_Road_Network_4);
var lyr_Connected_Roman_Road_Network_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Connected_Roman_Road_Network_4, 
                style: style_Connected_Roman_Road_Network_4,
                interactive: false,
                title: '<img src="styles/legend/Connected_Roman_Road_Network_4.png" /> Connected_Roman_Road_Network'
            });
var format_riversbuff2km_5 = new ol.format.GeoJSON();
var features_riversbuff2km_5 = format_riversbuff2km_5.readFeatures(json_riversbuff2km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_riversbuff2km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_riversbuff2km_5.addFeatures(features_riversbuff2km_5);
var lyr_riversbuff2km_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_riversbuff2km_5, 
                style: style_riversbuff2km_5,
                interactive: false,
                title: '<img src="styles/legend/riversbuff2km_5.png" /> rivers-buff-2km'
            });
var format_orengospnafoodplants_6 = new ol.format.GeoJSON();
var features_orengospnafoodplants_6 = format_orengospnafoodplants_6.readFeatures(json_orengospnafoodplants_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_orengospnafoodplants_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_orengospnafoodplants_6.addFeatures(features_orengospnafoodplants_6);
var lyr_orengospnafoodplants_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_orengospnafoodplants_6, 
                style: style_orengospnafoodplants_6,
                interactive: false,
                title: '<img src="styles/legend/orengospnafoodplants_6.png" /> orengo-spna-food-plants'
            });
var format_lcpscomp_7 = new ol.format.GeoJSON();
var features_lcpscomp_7 = format_lcpscomp_7.readFeatures(json_lcpscomp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_lcpscomp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lcpscomp_7.addFeatures(features_lcpscomp_7);
var lyr_lcpscomp_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lcpscomp_7, 
                style: style_lcpscomp_7,
                interactive: false,
                title: '<img src="styles/legend/lcpscomp_7.png" /> lcps-comp'
            });
var format_durovigutumuxelodum_8 = new ol.format.GeoJSON();
var features_durovigutumuxelodum_8 = format_durovigutumuxelodum_8.readFeatures(json_durovigutumuxelodum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_durovigutumuxelodum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_durovigutumuxelodum_8.addFeatures(features_durovigutumuxelodum_8);
var lyr_durovigutumuxelodum_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_durovigutumuxelodum_8, 
                style: style_durovigutumuxelodum_8,
                interactive: false,
                title: '<img src="styles/legend/durovigutumuxelodum_8.png" /> durovigutum-uxelodum'
            });
var format_durovigutumshiponthrope_9 = new ol.format.GeoJSON();
var features_durovigutumshiponthrope_9 = format_durovigutumshiponthrope_9.readFeatures(json_durovigutumshiponthrope_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_durovigutumshiponthrope_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_durovigutumshiponthrope_9.addFeatures(features_durovigutumshiponthrope_9);
var lyr_durovigutumshiponthrope_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_durovigutumshiponthrope_9, 
                style: style_durovigutumshiponthrope_9,
                interactive: false,
                title: '<img src="styles/legend/durovigutumshiponthrope_9.png" /> durovigutum-shiponthrope'
            });
var format_durovigutumletocetum_10 = new ol.format.GeoJSON();
var features_durovigutumletocetum_10 = format_durovigutumletocetum_10.readFeatures(json_durovigutumletocetum_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_durovigutumletocetum_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_durovigutumletocetum_10.addFeatures(features_durovigutumletocetum_10);
var lyr_durovigutumletocetum_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_durovigutumletocetum_10, 
                style: style_durovigutumletocetum_10,
                interactive: false,
                title: '<img src="styles/legend/durovigutumletocetum_10.png" /> durovigutum-letocetum '
            });
var format_reprojectedengroadpoints_11 = new ol.format.GeoJSON();
var features_reprojectedengroadpoints_11 = format_reprojectedengroadpoints_11.readFeatures(json_reprojectedengroadpoints_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_reprojectedengroadpoints_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reprojectedengroadpoints_11.addFeatures(features_reprojectedengroadpoints_11);
var lyr_reprojectedengroadpoints_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reprojectedengroadpoints_11, 
                style: style_reprojectedengroadpoints_11,
                interactive: true,
    title: 'reprojected-eng-road-points<br />\
    <img src="styles/legend/reprojectedengroadpoints_11_0.png" /> fort<br />\
    <img src="styles/legend/reprojectedengroadpoints_11_1.png" /> mine<br />\
    <img src="styles/legend/reprojectedengroadpoints_11_2.png" /> settlement<br />\
    <img src="styles/legend/reprojectedengroadpoints_11_3.png" /> temple<br />\
    <img src="styles/legend/reprojectedengroadpoints_11_4.png" /> town<br />\
    <img src="styles/legend/reprojectedengroadpoints_11_5.png" /> <br />'
        });

lyr_orengoSpNAbetweennesscentrality_modified_0.setVisible(true);lyr_lewisedgebetweenness_modified_1.setVisible(true);lyr_clippedengmap_2.setVisible(true);lyr_buffromanroads5km_3.setVisible(true);lyr_Connected_Roman_Road_Network_4.setVisible(true);lyr_riversbuff2km_5.setVisible(true);lyr_orengospnafoodplants_6.setVisible(true);lyr_lcpscomp_7.setVisible(true);lyr_durovigutumuxelodum_8.setVisible(true);lyr_durovigutumshiponthrope_9.setVisible(true);lyr_durovigutumletocetum_10.setVisible(true);lyr_reprojectedengroadpoints_11.setVisible(true);
var layersList = [lyr_orengoSpNAbetweennesscentrality_modified_0,lyr_lewisedgebetweenness_modified_1,lyr_clippedengmap_2,lyr_buffromanroads5km_3,lyr_Connected_Roman_Road_Network_4,lyr_riversbuff2km_5,lyr_orengospnafoodplants_6,lyr_lcpscomp_7,lyr_durovigutumuxelodum_8,lyr_durovigutumshiponthrope_9,lyr_durovigutumletocetum_10,lyr_reprojectedengroadpoints_11];
lyr_clippedengmap_2.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_buffromanroads5km_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CLASS': 'CLASS', 'CERTAINTY': 'CERTAINTY', 'PERIOD': 'PERIOD', 'HYPERLINK': 'HYPERLINK', 'SOURCE': 'SOURCE', 'Shape_Leng': 'Shape_Leng', 'Shape__Len': 'Shape__Len', });
lyr_Connected_Roman_Road_Network_4.set('fieldAliases', {'Name': 'Name', 'Source': 'Source', 'Length': 'Length', 'Notes': 'Notes', });
lyr_riversbuff2km_5.set('fieldAliases', {'dissolve': 'dissolve', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'name_alt': 'name_alt', 'rivernum': 'rivernum', 'note': 'note', 'min_zoom': 'min_zoom', 'name_en': 'name_en', 'min_label': 'min_label', 'ne_id': 'ne_id', 'label': 'label', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', });
lyr_orengospnafoodplants_6.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'layer': 'layer', 'path': 'path', });
lyr_lcpscomp_7.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'layer': 'layer', 'path': 'path', });
lyr_durovigutumuxelodum_8.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'layer': 'layer', 'path': 'path', });
lyr_durovigutumshiponthrope_9.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'layer': 'layer', 'path': 'path', });
lyr_durovigutumletocetum_10.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'layer': 'layer', 'path': 'path', });
lyr_reprojectedengroadpoints_11.set('fieldAliases', {'id': 'id', 'name': 'name', 'lat': 'lat', 'long': 'long', 'site-type': 'site-type', 'closest-ci': 'closest-ci', 'mod-countr': 'mod-countr', 'pleiades': 'pleiades', 'reference': 'reference', 'mod-names': 'mod-names', });
lyr_clippedengmap_2.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'TextEdit', 'min_zoom': 'TextEdit', });
lyr_buffromanroads5km_3.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'CLASS': 'TextEdit', 'CERTAINTY': 'TextEdit', 'PERIOD': 'TextEdit', 'HYPERLINK': 'TextEdit', 'SOURCE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Connected_Roman_Road_Network_4.set('fieldImages', {'Name': 'TextEdit', 'Source': 'TextEdit', 'Length': 'TextEdit', 'Notes': 'TextEdit', });
lyr_riversbuff2km_5.set('fieldImages', {'dissolve': '', 'scalerank': '', 'featurecla': '', 'name': '', 'name_alt': '', 'rivernum': '', 'note': '', 'min_zoom': '', 'name_en': '', 'min_label': '', 'ne_id': '', 'label': '', 'wikidataid': '', 'name_ar': '', 'name_bn': '', 'name_de': '', 'name_es': '', 'name_fr': '', 'name_el': '', 'name_hi': '', 'name_hu': '', 'name_id': '', 'name_it': '', 'name_ja': '', 'name_ko': '', 'name_nl': '', 'name_pl': '', 'name_pt': '', 'name_ru': '', 'name_sv': '', 'name_tr': '', 'name_vi': '', 'name_zh': '', 'name_fa': '', 'name_he': '', 'name_uk': '', 'name_ur': '', 'name_zht': '', });
lyr_orengospnafoodplants_6.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_lcpscomp_7.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_durovigutumuxelodum_8.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_durovigutumshiponthrope_9.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_durovigutumletocetum_10.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_reprojectedengroadpoints_11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'site-type': 'TextEdit', 'closest-ci': 'TextEdit', 'mod-countr': 'TextEdit', 'pleiades': 'TextEdit', 'reference': 'TextEdit', 'mod-names': 'TextEdit', });
lyr_clippedengmap_2.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr_buffromanroads5km_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'CLASS': 'no label', 'CERTAINTY': 'no label', 'PERIOD': 'no label', 'HYPERLINK': 'no label', 'SOURCE': 'no label', 'Shape_Leng': 'no label', 'Shape__Len': 'no label', });
lyr_Connected_Roman_Road_Network_4.set('fieldLabels', {'Name': 'no label', 'Source': 'no label', 'Length': 'no label', 'Notes': 'no label', });
lyr_riversbuff2km_5.set('fieldLabels', {'dissolve': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'name_alt': 'no label', 'rivernum': 'no label', 'note': 'no label', 'min_zoom': 'no label', 'name_en': 'no label', 'min_label': 'no label', 'ne_id': 'no label', 'label': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', });
lyr_orengospnafoodplants_6.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_lcpscomp_7.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_durovigutumuxelodum_8.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_durovigutumshiponthrope_9.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_durovigutumletocetum_10.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_reprojectedengroadpoints_11.set('fieldLabels', {'id': 'no label', 'name': 'inline label', 'lat': 'inline label', 'long': 'inline label', 'site-type': 'inline label', 'closest-ci': 'inline label', 'mod-countr': 'no label', 'pleiades': 'no label', 'reference': 'no label', 'mod-names': 'inline label', });
lyr_reprojectedengroadpoints_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});