const MyAppBody = () => {
  return (
    <div className="content">
      <h2>Content Section</h2>
      <div>
        This is the content of the app. It can include variout elements and
        components
      </div>
      <br />
      <button type="button" value="Click me!">
        Click Me!
      </button>
      <div className="class-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <footer>2023 My App. All rights reserved</footer>
    </div>
  );
};

export default MyAppBody;
