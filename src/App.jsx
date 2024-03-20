import logo from "./logo.svg";
import "./App.css";
import { Map } from "./components/Map";
import { useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC6wmn1VHvJe0XZNS1n4soxwAa0LO-_Rp0",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading</div>;

  return <div style={{ width: "100%", height: "100vh" }}>{<Map />}</div>;
}

export default App;
