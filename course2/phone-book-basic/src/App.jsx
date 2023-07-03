import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, phone) => {
    setContacts([...contacts, { name, phone }]);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.phone.includes(filter)
  );

  return (
    <div className="App max-w-4xl mx-auto mt-4">
      <h1 className="text-center text-3xl font-bold">Phone Book App</h1>
      <div className="text-center my-5 flex flex-col gap-5">
        <AddContactForm addContact={addContact} />
        <SearchFilter handleFilterChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    </div>
  );
}

export default App;
