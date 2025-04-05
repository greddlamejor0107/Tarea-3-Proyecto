const handleAddContact = () => {
    if (!formData.name || !formData.email) {
        alert("El nombre y el correo electrónico son obligatorios.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert("Ingrese un correo válido.");
        return;
    }

    if (isEditing) {
        handleUpdateContact();
    } else {
        setContacts([...contacts, formData]);
        resetForm();
    }
};
