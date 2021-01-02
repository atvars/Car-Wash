
        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: 52.976850,
                    lng: -0.034810
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 52.976850,
                lng: -0.034810
            }, {
                lat: 52.975440,
                lng: -0.029170
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker ({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
        