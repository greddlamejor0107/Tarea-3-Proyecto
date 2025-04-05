import React, { useState, useEffect } from 'react'; // ✅ Necesario para usar useEffect

// Estado inicial cargado desde localStorage
const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
});

// Guardar automáticamente cada vez que contacts cambie
useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
