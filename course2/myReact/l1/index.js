function NavBar() {
  return (
    <nav className="navbar">
      <a>Navbar</a>
      {/* <h1>Doc!</h1> */}
    </nav>
  );
}

function MainContent() {
  return <h1>Wujio!</h1>;
}

ReactDOM.render(
  <div>
    <NavBar />
    <MainContent />
  </div>,
  document.getElementById("root")
);

document.getElementById("root").appendChild("<h1>OK");
