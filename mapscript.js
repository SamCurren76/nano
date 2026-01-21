// Map Chart Implementation
(function() {

    function initializeMap() {
        const chartDiv = document.getElementById('chartdiv');
        am5.ready(function() {
            try {
                // Dispose any existing instances
                am5.array.each(am5.registry.rootElements, function(root) {
                    if (root.dom && root.dom.id === "chartdiv") {
                        root.dispose();
                    }
                });

                // Create root element
                var root = am5.Root.new("chartdiv");
                // hide logo 
                root._logo.dispose();

                // Set themes
                root.setThemes([am5themes_Animated.new(root)]);

                // Create the map chart - completely static
                var chart = root.container.children.push(
                    am5map.MapChart.new(root, {
                        panX: "none",
                        panY: "none",
                        projection: am5map.geoMercator(),
                        homeZoomLevel: 2.5,
                        homeGeoPoint: { longitude: 20, latitude: 10 }, 
                        wheelable: false,
                        pinchZoom: false,
                        zoomControl: false,
                        maxZoomLevel: 2.5,
                        minZoomLevel: 2.5
                    })
                );

                // Set initial zoom level and lock it
                chart.set("zoomLevel", 2.5);
                
                // Disable all zoom and pan interactions
                chart.chartContainer.set("wheelable", false);
                chart.chartContainer.set("draggable", false);
                
                // Prevent wheel events from being captured by the chart
                chartDiv.addEventListener('wheel', function(e) {
                    // Don't prevent default, allow normal page scroll
                    e.stopPropagation();
                }, { passive: true, capture: true });
                
                // Prevent all mouse drag events on the chart
                chartDiv.addEventListener('mousedown', function(e) {
                    // Only stop propagation for drag attempts, not clicks for tooltips
                    if (e.target.closest('.am5-MapChart-group')) {
                        e.stopPropagation();
                    }
                }, { capture: true });
                
                // Prevent touch drag events
                chartDiv.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                }, { passive: true, capture: true });
                
                chartDiv.addEventListener('touchmove', function(e) {
                    e.stopPropagation();
                }, { passive: true, capture: true });

                // Create series for background fill
                var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
                backgroundSeries.mapPolygons.template.setAll({
                    fill: am5.color(0x090a21),
                    fillOpacity: 1,
                    strokeOpacity: 0,
                    interactive: false
                });

                backgroundSeries.data.push({
                    geometry: am5map.getGeoRectangle(90, 180, -90, -180)
                });

                // Create main polygon series for countries
                var polygonSeries = chart.series.push(
                    am5map.MapPolygonSeries.new(root, {
                        geoJSON: am5geodata_worldLow
                    })
                );

                polygonSeries.mapPolygons.template.setAll({
                    fill: am5.color(0x3e68a6),
                    fillOpacity: 1,
                    stroke: am5.color(0x090a21),
                    strokeWidth: 1,
                    tooltipText: "{name}",
                    interactive: true,
                    draggable: false,
                    toggleKey: "none"
                });
                
                // Ensure polygons don't interfere with scroll
                polygonSeries.mapPolygons.template.events.on("wheel", function(ev) {
                    ev.originalEvent.stopPropagation();
                });

                // Create point series for markers
                var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

                pointSeries.bullets.push(function() {
                    var container = am5.Container.new(root, {
                        tooltipText: "{title}",
                        cursorOverStyle: "pointer",
                        interactive: true
                    });

                    var circle = container.children.push(
                        am5.Circle.new(root, {
                            radius: 4,
                            tooltipY: 0,
                            fill: am5.color(0x7dacf9),
                            strokeOpacity: 0
                        })
                    );

                    var circle2 = container.children.push(
                        am5.Circle.new(root, {
                            radius: 4,
                            tooltipY: 0,
                            fill: am5.color(0x7dacf9),
                            strokeOpacity: 0,
                            tooltipText: "{title}"
                        })
                    );

                    circle.animate({
                        key: "scale",
                        from: 1,
                        to: 5,
                        duration: 600,
                        easing: am5.ease.out(am5.ease.cubic),
                        loops: Infinity
                    });
                    
                    circle.animate({
                        key: "opacity",
                        from: 1,
                        to: 0.1,
                        duration: 600,
                        easing: am5.ease.out(am5.ease.cubic),
                        loops: Infinity
                    });

                    return am5.Bullet.new(root, {
                        sprite: container
                    });
                });

                var cities = [
                    { title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
                    { title: "Copenhagen", latitude: 55.6763, longitude: 12.5681 },
                    { title: "Paris", latitude: 48.8567, longitude: 2.351 },
                    { title: "Reykjavik", latitude: 64.1353, longitude: -21.8952 },
                    { title: "Moscow", latitude: 55.7558, longitude: 37.6176 },
                    { title: "Madrid", latitude: 40.4167, longitude: -3.7033 },
                    { title: "London", latitude: 51.5002, longitude: -0.1262 },
                    { title: "Beijing", latitude: 39.9056, longitude: 116.3958 },
                    { title: "New Delhi", latitude: 28.6353, longitude: 77.225 },
                    { title: "Tokyo", latitude: 35.6785, longitude: 139.6823 },
                    { title: "Ankara", latitude: 39.9439, longitude: 32.856 },
                    { title: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
                    { title: "Brasilia", latitude: -15.7801, longitude: -47.9292 },
                    { title: "Ottawa", latitude: 45.4235, longitude: -75.6979 },
                    { title: "Washington", latitude: 38.8921, longitude: -77.0241 },
                    { title: "Kinshasa", latitude: -4.3369, longitude: 15.3271 },
                    { title: "Cairo", latitude: 30.0571, longitude: 31.2272 },
                    { title: "Pretoria", latitude: -25.7463, longitude: 28.1876 }
                ];

                cities.forEach(function(city) {
                    pointSeries.data.push({
                        geometry: { type: "Point", coordinates: [city.longitude, city.latitude] },
                        title: city.title
                    });
                });

                // Make stuff animate on load
                chart.appear(1000, 100);

            } catch (error) {
                console.error('Error initializing map:', error);
            }
        });
    }

    // Wait for window to fully load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initializeMap, 500);
        });
    } else {
        setTimeout(initializeMap, 500);
    }
})();