import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        {contacts.map((contact, index) => (
          <tr className="bg-base-200" key={index}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ContactList;
