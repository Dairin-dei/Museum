export function managingMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGFpcmluLWRlaSIsImEiOiJja3VsbzdlczEzanQ5MzFtb21kbGgyNGw5In0.Ub1lBE6wYAdpQ2_GZfkhXg";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [2.3364, 48.86091],
    zoom: 15.8,
  });

  const marker1 = new mapboxgl.Marker({ color: "black" })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);

  const marker2 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);

  const marker3 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);

  const marker4 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.333, 48.8619])
    .addTo(map);

  const marker5 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);

  let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true,
  });

  map.addControl(nav, "top-right");
}
