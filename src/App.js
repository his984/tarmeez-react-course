import { useState } from "react";
import { places } from "./data.js";
import { getImageUrl } from "./utils.js";
import "./App.css";
import { SizeContext, PlaceContext } from "./context/ListContext.js";
import { useContext } from "react";

// APP
function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <SizeContext.Provider value={imageSize}>
      <div className="App">
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List imageSize={imageSize}></List>
      </div>
    </SizeContext.Provider>
  );
}
export default App;

// List

function List() {
  const listItems = places.map((place) => (
    <PlaceContext.Provider value={place}>
      <li key={place.id}>
        <Place />
      </li>
    </PlaceContext.Provider>
  ));
  return <ul>{listItems}</ul>;
}

// Place
function Place() {
  const place = useContext(PlaceContext);
  return (
    <>
      <PlaceImage />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}
// PlaceImage
function PlaceImage() {
  const place = useContext(PlaceContext);
  const imageSize = useContext(SizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
