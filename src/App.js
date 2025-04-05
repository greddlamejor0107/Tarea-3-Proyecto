
const [search, setSearch] = useState(""); // Estado del campo de búsqueda

// Input para buscar contacto
<input 
    type="text" 
    placeholder="Buscar contacto..." 
    value={search} 
    onChange={(e) => setSearch(e.target.value)}
/>

// Lista filtrada de contactos
const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
    contact.email.toLowerCase().includes(search.toLowerCase())
);

// Reemplaza contacts.map por:
filteredContacts.map((contact, index) => ( ... ))
=======
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

