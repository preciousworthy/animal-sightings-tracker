import { useState, useEffect } from "react";
import Form from "./form";

function Sightings() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sightings")
      .then((response) => response.json())
      .then((students) => {
            setStudents(students);
          });
  }, []);

  const addStudent = (newStudent) => {
    //console.log(newStudent);
    //postStudent(newStudent);
    setStudents((students) => [...students, newStudent]);
  };

  return (
    <div className="students">
      <h2> Report Your Sighting </h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {" "}
            {student.firstname} {student.lastname}
          </li>
        ))}
      </ul>
      <Form addStudent={addStudent} />
    </div>
  );
}

export default Sightings;
