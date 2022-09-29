import { useState, useEffect } from "react";
import Form from "./form";

function Sightings() {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/api/sightings")
      .then((response) => response.json())
      .then((sightings) => {
            setSightings(sightings);
          });
  }, []);

  const addSighting = (newSighting) => {
    //console.log(newStudent);
    //postStudent(newStudent);
    setSightings((sightings) => [...sightings, newSighting]);
  };

  return (
    <div className="sightings">
      <h2> Current Sightings </h2>
      <ul>
        {sightings.map((sighting) => (
          <li key={sighting.id}>
            {/* {" "} */}
            {sighting.sighting_date} {sighting.individual} {sighting.location}
            {sighting.healthy} {sighting.email}
            <button type="button">EDIT</button>
          </li>
        ))}
      </ul>
      <h2> Report Your Sighting </h2>
      <Form addSighting={addSighting} />
    </div>
  );
}

export default Sightings;
