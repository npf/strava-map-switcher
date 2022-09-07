/*
 * Map switcher for Strava website.
 *
 * Copyright © 2016 Tomáš Janoušek.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var AdditionalMapLayers;

{
	const osmAttr = '&copy; <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
	const thunderforestAttr = osmAttr + ', Tiles courtesy of <a href="https://www.thunderforest.com/" target="_blank">Andy Allan</a>';
	const mtbMapAttr = osmAttr + ', Tiles courtesy of <a href="https://mtbmap.cz/" target="_blank">mtbmap.cz</a>';
	const freeMapSkAttr = osmAttr + ', Tiles courtesy of <a href="https://freemap.sk/" target="_blank">freemap.sk</a>';
	const mapyCzAttr = '&copy; <a href="https://www.seznam.cz/" target="_blank">Seznam.cz, a.s</a>, ' + osmAttr;
	const cuzkAttr = '&copy; <a href="https://geoportal.cuzk.cz" target="_blank">ČÚZK</a>';
	const kartverketAttr = '&copy; <a href="https://www.kartverket.no/">Kartverket</a>';
	const geoportailAttr = '&copy; <a href="https://www.geoportail.gouv.fr/">Geoportail</a>';
	const swisstopoAttr = '&copy; <a href="https://map.geo.admin.ch/">SwissTopo</a>';
	const topo4umapsAttr = '&copy; <a href="http://4umaps.eu/index.htm">4umaps.eu Maps</a>';
	const mtbMapNOAttr = osmAttr + ', Tiles courtesy of <a href="https://mtbmap.no/" target="_blank">mtbmap.no</a>';

	AdditionalMapLayers = {
		openstreetmap: {name: "OpenStreetMap",
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			opts: {maxZoom: 20, maxNativeZoom: 19, attribution: osmAttr}},
		opencyclemap: {name: "OpenCycleMap",
			url: "https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png",
			opts: {maxZoom: 20, attribution: thunderforestAttr}},
		topo4umaps: {name: "4Umaps",
			url: "http://4umaps.eu/{z}/{x}/{y}.png",
			opts: {maxZoom: 20, attribution: topo4umapsAttr}},
		transport: {name: "Transport",
			url: "https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png",
			opts: {maxZoom: 20, attribution: thunderforestAttr}},
		outdoors: {name: "Outdoors",
			url: "https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png",
			opts: {maxZoom: 20, attribution: thunderforestAttr}},
//		mapycz: {name: "mapy.cz (Outdoor)",
//			url: "https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}",
//			opts: {minZoom: 2, maxZoom: 20, maxNativeZoom: 18, attribution: mapyCzAttr}},
//		mapyczwinter: {name: "mapy.cz (Winter)",
//			url: "https://mapserver.mapy.cz/winter-m/{z}-{x}-{y}",
//			opts: {minZoom: 2, maxZoom: 20, maxNativeZoom: 18, attribution: mapyCzAttr}},
//		mapyczbing: {name: "mapy.cz (Aerial)",
//			url: "https://mapserver.mapy.cz/ophoto-m/{z}-{x}-{y}",
//			opts: {minZoom: 2, maxZoom: 20, attribution: mapyCzAttr},
//			overlay:
//				{url: "https://mapserver.mapy.cz/hybrid-trail_bike-m/{z}-{x}-{y}",
//					opts: {minZoom: 2, maxZoom: 20, maxNativeZoom: 18, attribution: mapyCzAttr}}},
//		mtbmap: {name: "mtbmap.cz [Europe]",
//			url: "https://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png",
//			opts: {minZoom: 3, maxZoom: 20, maxNativeZoom: 18, attribution: mtbMapAttr}},
		freemapsk: {name: "freemap.sk [Europe south-east]",
			url: "https://outdoor.tiles.freemap.sk/{z}/{x}/{y}",
			opts: {minZoom: 3, maxZoom: 20, maxNativeZoom: 19, attribution: freeMapSkAttr}},
//		zmcr: {name: "Základní mapy ČR [CZ]",
//			url: "https://ags.cuzk.cz/arcgis/rest/services/zmwm/MapServer/tile/{z}/{y}/{x}",
//			opts: {minZoom: 7, maxZoom: 20, maxNativeZoom: 18, attribution: cuzkAttr}},
//		mtbmapno: {name: "mtbmap.no [NO]",
//			url: "https://mtbmap.no/tiles/osm/mtbmap/{z}/{x}/{y}.jpg",
//			opts: {minZoom: 1, maxZoom: 20, maxNativeZoom: 16, attribution: mtbMapNOAttr}},
//		kartverket: {name: "Kartverket [NO]",
//			url: "https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}",
//			opts: {minZoom: 2, maxZoom: 20, maxNativeZoom: 18, attribution: kartverketAttr}},
		geoportail: {name: "Geoportail Aerial [FR]",
			url: "https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/geoportail/wmts?layer=ORTHOIMAGERY.ORTHOPHOTOS&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix={z}&TileCol={x}&TileRow={y}",
			opts: {maxZoom: 20, maxNativeZoom: 19, attribution: geoportailAttr}},
		igntop25: {name: "Geoportail Top25 [FR]",
			url: "https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix={z}&TileCol={x}&TileRow={y}",
			opts: {maxZoom: 20, maxNativeZoom: 16, attribution: geoportailAttr}},
		ignmaps: {name: "Geoportail Maps [FR]",
			url: "https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.MAPS&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix={z}&TileCol={x}&TileRow={y}",
			opts: {maxZoom: 20, maxNativeZoom: 16, attribution: geoportailAttr}},
		swisstopomaps: {name: "SwissTopo Maps [CH]",
			url: "https://wmts100.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
			opts: {maxZoom: 20, maxNativeZoom: 16, attribution: swisstopoAttr}},
		swisstopo25: {name: "SwissTopo 1/25000 [CH]",
			url: "https://wmts100.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe.pk25.noscale/default/current/3857/{z}/{x}/{y}.jpeg",
			opts: {maxZoom: 20, maxNativeZoom: 16, attribution: swisstopoAttr}},
		swisstopo10: {name: "SwissTopo 1/10000 [CH]",
			url: "https://wmts100.geo.admin.ch/1.0.0/ch.swisstopo.landeskarte-farbe-10/default/current/3857/{z}/{x}/{y}.jpeg",
			opts: {maxZoom: 20, maxNativeZoom: 16, attribution: swisstopoAttr}},
	};
}
