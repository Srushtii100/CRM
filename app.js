import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactsTable from "./ContactsTable";
import { Container } from "@mui/material";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleEditContact = (contact) => {
    console.log("Edit Contact:", contact);
    // Implement edit logic here
  };

  const handleDeleteContact = (contact) => {
    setContacts(contacts.filter((c) => c !== contact));
  };

  return (
    <Container>
      <ContactForm onAddContact={handleAddContact} />
      <ContactsTable
        contacts={contacts}
        onEditContact={handleEditContact}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};

export default App;
