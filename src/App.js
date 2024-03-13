import logo from "./logo.svg";
import "./App.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function App() {
  return (
    <div className="App">
      <YMaps>
        <div>
          My awesome application with maps!
          <Map
            defaultState={{
              center: [54.9044, 52.3154],
              zoom: 14,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark defaultGeometry={[54.9044, 52.3154]} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default App;
