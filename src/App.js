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
