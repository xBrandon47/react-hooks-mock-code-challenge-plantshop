import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants} ) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plants.map((plant) => {
        return <PlantCard 
        plant ={plant}
        key= {plants.id}
        />
      })}
      </ul>
  );
}

export default PlantList;
