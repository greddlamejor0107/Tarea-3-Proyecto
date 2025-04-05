const handleClearContacts = () => {
    if (window.confirm("¿Seguro que quieres eliminar todos los contactos?")) {
        setContacts([]);
    }
};

// Añadir el botón al render
<button 
    onClick={handleClearContacts} 
    style={{ backgroundColor: 'red', color: 'white', marginTop: '10px' }}
>
    Eliminar Todos
</button>
