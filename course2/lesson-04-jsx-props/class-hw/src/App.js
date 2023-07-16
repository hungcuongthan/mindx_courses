import logo from "./logo.svg";
import "./App.css";
import "./StudentObj";
import StudentList from "./StudentObj";

function App() {
  return (
    <div className="container">
      {/* <h1>Student Monitoring sheet</h1>; */}
      <div className="students-container">
        <StudentList name="A" toan={10} ly={9} hoa={8}></StudentList>
        <StudentList name="B" toan={10} ly={9} hoa={8}></StudentList>
        <StudentList name="B" toan={10} ly={9} hoa={8}></StudentList>
        <StudentList name="B" toan={10} ly={9} hoa={8}></StudentList>
        <StudentList name="B" toan={10} ly={9} hoa={8}></StudentList>
      </div>
    </div>
  );
}

export default App;
