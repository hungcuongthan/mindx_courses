import React, { useState } from "react";

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, phone);
    setName("");
    setPhone("");
  };

  return (
    <form
      className="flex justify-center items-center gap-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone"
      />
      <input className="btn" type="submit" value="Add Contact" />
    </form>
  );
};

export default AddContactForm;
