const WelcomeHeader = () => {
  return (
    <header>
      <h1>Welcome to My App</h1>
      <nav>
        <ul className="nav-bar-container">
          <li className="nav-content">
            <a href="/home">Home</a>
          </li>
          <li className="nav-content">
            <a href="/about">About</a>
          </li>
          <li className="nav-content">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default WelcomeHeader;
