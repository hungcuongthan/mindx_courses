const StudentList = (props) => {
  const { name, classID, toan, ly, hoa } = props;
  return (
    <div>
      <h1 className="studentName">Student name: {name}</h1>
      <div>Class ID: {classID}</div>
      <ul>
        <li>
          <strong>Toan: {toan}</strong>
        </li>
        <li>
          <strong>Ly: {ly}</strong>
        </li>
        <li>
          <strong>Hoa: {hoa}</strong>
        </li>
      </ul>
    </div>
  );
};

export default StudentList;
