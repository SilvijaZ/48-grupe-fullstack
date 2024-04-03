import { useState } from "react";


function App() {
  const [student, setStudent] = useState(null);
  const [allStudents, setAllStudents] = useState([]);

  function handleFetchStudent() {
    fetch('http://localhost:4831/api/student')
      .then(res => res.json())
      .then(data => setStudent(data))
      .catch(error => console.error(error));
  }

  function handleFetchAllStudents() {
    fetch('http://localhost:4831/api/allstudents')
      .then(res => res.json())
      .then(data => setAllStudents(data))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <header>
        <h1>Student Info</h1>
      </header>
      <main>
        <button onClick={handleFetchStudent}>Get Student</button>
        {student ? (
          <div>
            <h2>Name: {student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Marks: {student.marks.join(', ')}</p>
          </div>
        ): null}

        <button onClick={handleFetchAllStudents}>Get All Students</button>
        {allStudents.length > 0 ? (
          <div>
            <h2>All Students</h2>
            {allStudents.map((student, index) => (
              <div key={index}>
                <h3>Name: {student.name}</h3>
                <p>Age: {student.age}</p>
                <p>Marks: {student.marks.join(', ')}</p>
              </div>
            ))}
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;