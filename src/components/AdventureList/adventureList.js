import React, { useEffect, useState } from "react";
import AdventureCard from "../AdventureCard/adventureCard";

const AdventureList = () => {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/adventures")
      .then((response) => response.json())
      .then((data) => setAdventures(data.adventures));
  }, []);

  return (
    <div>
      <div className="App">
        {adventures.map((eachAdventure, id) => {
          return <AdventureCard adventures={eachAdventure} />;
        })}
      </div>
    </div>
  );
};

export default AdventureList;
