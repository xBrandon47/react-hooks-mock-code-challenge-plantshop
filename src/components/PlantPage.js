import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [searchValue, setSearchValue] = useState("")

useEffect (() => {
  fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plantsData) => {
      setPlants(plantsData)
    });
}, []);
 
function handlePutNewPlant(newPlant) {
  const updatedPlantsArray= [...plants, newPlant];
  setPlants(updatedPlantsArray);
}

const displayedPlants = plants.filter(plant => {
  return plant.name.toLowerCase().includes(searchValue.toLowerCase());
})

  return (
    <main>
      <NewPlantForm onPutNewPlant= {handlePutNewPlant} />
      <Search searchValue= {searchValue} onChangeSearch={setSearchValue} />
      <PlantList plants= {displayedPlants} />
    </main>
  );
}

export default PlantPage;
