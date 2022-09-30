import { useState } from "react";

const Form = (props) => {
  const [sighting, setSighting] = useState({
    sighting_date: "",
    individual: "",
    location: "",
    healthy: "",
    created: "",
    email: ""
  });

  //create functions that handle the event of the user typing into the form
  // const handleNameChange = (event) => {
  //   const firstname = event.target.value;
  //   setStudent((student) => ({ ...student, firstname }));
  // };

  const handleSightingDate = (event) => {
    const sighting_date = event.target.value;
    setSighting((sighting) => ({ ...sighting, sighting_date }));
  };

  const handleIndividual = (event) => {
    const individual = event.target.value;
    setSighting((sighting) => ({ ...sighting, individual }));
  };

  const handleLocation = (event) => {
    const location = event.target.value;
    setSighting((sighting) => ({ ...sighting, location }));
  };

  const handleHealthyTF = (event) => {
    const healthy = event.target.value;
    setSighting((sighting) => ({ ...sighting, healthy }));
  };

  const handleUserEmail = (event) => {
    const email = event.target.value;
    setSighting((sighting) => ({ ...sighting, email }));
  };

  //A function to handle the post request
  const postSighting = (newSighting) => {
    return fetch("http://localhost:5005/api/sightings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addSighting(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSighting(sighting);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>When?</label>
        <input
          type="text"
          id="add-user-name"
          placeholder="MM/DD/YYYY"
          required
          value={sighting.sighting_date}
          onChange={handleSightingDate}
        />
        <label>Who?</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Name of friend"
          required
          value={sighting.individual}
          onChange={handleIndividual}
        />
        <label>Where?</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Location of friend"
          required
          value={sighting.location}
          onChange={handleLocation}
        />
        <label>Did They Look Healthy?</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Enter true or false"
          required
          value={sighting.healthy}
          onChange={handleHealthyTF}
        />
        <label>Who Are You?</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Enter your email address"
          required
          value={sighting.email}
          onChange={handleUserEmail}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
