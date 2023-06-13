// Store the connection data
let connections = [];

// Function to handle form submission
function addConnection(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  // Create a new connection object
  const connection = {
    name: name,
    phone: phone,
  };

  // Add the connection to the array
  connections.push(connection);

  // Clear the form inputs
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";

  // Render the connection list
  renderConnections();
}

// Function to render the connection list
function renderConnections() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const connectionItems = document.getElementById("connection-items");

  // Clear previous list items
  connectionItems.innerHTML = "";

  // Filter connections based on search query
  const filteredConnections = connections.filter((connection) => {
    const connectionName = connection.name.toLowerCase();
    return connectionName.includes(searchQuery);
  });

  // Create list items for each connection
  filteredConnections.forEach((connection) => {
    // Item got  created in the memory and not yet got appended into our webpage
    const listItem = document.createElement("li");
    listItem.textContent = `${connection.name} - ${connection.phone}`;
    connectionItems.appendChild(listItem);
  });
}

// Attach event listener to form submit
const connectionForm = document.getElementById("connection-form");
connectionForm.addEventListener("submit", addConnection);

// Attach event listener to search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", renderConnections);
