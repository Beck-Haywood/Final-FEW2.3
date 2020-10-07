import React, { useEffect, useState } from "react";
import Title from "./Title";
import Character from "./Character"
function Starwars(props) {
  const [id, setId] = useState(1);
  const [loadingState, setLoadingState] = useState("Input ID");
  const [starData, setStarData] = useState(null);
  const [characterList, setCharList] = useState([]);
  const [homeworld, setHomeworld] = useState()

  function renderData() {
    if (loadingState === "Failed!" || loadingState === "Input ID" || loadingState === "Loading..." || starData === null) {
        console.log(loadingState)
        // return loadingState
    } else {
        // Take the weather data apart to more easily populate the component
        const {
        name,
        height,
        mass,
        hair_color,
        eye_color
        } = starData;
        // const home = homeworld
        console.log('***********************')
        console.log(characterList)
        return (
        <div className="App">
            <p>Name: {name}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Homeworld: {homeworld}</p>

            
            <button onClick={saveCharacter}>Save</button>
            <Title title="Saved characters:"/>
            
            {characterList.map(({name, height, mass, hair_color, eye_color}) => {          
                return <Character name={name} height={height} mass={mass} hair_color={hair_color} eye_color={eye_color} homeworld={homeworld}/>
            })}
        </div>
        );
    }
  }
  function saveCharacter() {
      const newList = [...characterList, starData]
      setCharList(newList)
      console.log('--------------------------------')
      console.log(newList)
  }

  return (
      <div>
    <form
      onSubmit={ async (e) => {
        e.preventDefault();
        setLoadingState("Loading...");
        const url = `https://swapi.dev/api/people/${id}/`;
        console.log(url);
        // Get data from the API with fetch
        console.log("here");
        try {
            const res = await fetch(url);
            const json = await res.json();
            // If the request was successful assign the data to component state

            console.log(json);
            const {homeworld} = json
            const res2 = await fetch(homeworld);
            const json2 = await res2.json();
            setHomeworld(json2.name);
            // json.homeworld = json2
            setStarData(json);
            // setHomeworld(json2["name"])
            // setHomeworld(json2)
            setLoadingState("Success!");


        } catch (err) { 
            // If there is no data
            setStarData(null);
            // Print an error to the console.
            setLoadingState("Failed!");
            console.log("-- Error fetching --");
            console.log(err.message);
            // You may want to display an error to the screen here.
        }
      }}
    >
      <input value={id} onChange={(e) => setId(e.target.value)} type="text" />
      <button type="submit">Submit</button>
      <Title title={loadingState} />
    </form>
    {renderData()}
    </div>


  );
}

export default Starwars;
