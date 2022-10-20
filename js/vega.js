var map = "js/map.vg.json";
vegaEmbed('#map', map).then(function (result) {
}).catch(console.error);

var line = "js/line.vg.json"
vegaEmbed('#line', line).then(function (result) {
}).catch(console.error);

var stream = "js/stream.vg.json"
vegaEmbed('#stream', stream).then(function (result) {
}).catch(console.error);

var stream = "js/trellis.vg.json"
vegaEmbed('#trellis', stream).then(function (result) {
}).catch(console.error);