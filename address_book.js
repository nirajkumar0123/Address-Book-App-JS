// UC1: Ability to create a Contact in Address Book
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// UC2: Ability to ensure valid contacts are added
function validateContact(contact) {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    const addressPattern = /^[a-zA-Z0-9\s]{4,}$/;
    const zipPattern = /^\d{5,6}$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if (!namePattern.test(contact.firstName) || !namePattern.test(contact.lastName))
        throw "Invalid Name";
    if (!addressPattern.test(contact.address) || !addressPattern.test(contact.city) || !addressPattern.test(contact.state))
        throw "Invalid Address, City, or State";
    if (!zipPattern.test(contact.zip)) throw "Invalid Zip Code";
    if (!phonePattern.test(contact.phoneNumber)) throw "Invalid Phone Number";
    if (!emailPattern.test(contact.email)) throw "Invalid Email";
}


// UC3: Ability to create Address Book array and add contacts
let addressBook = [];
function addContact(contact) {
    validateContact(contact);
    addressBook.push(contact);
}

// UC4: Ability to find a contact by name and edit it
function editContact(name, updatedContact) {
    let index = addressBook.findIndex(contact => contact.firstName === name);
    if (index !== -1) {
        validateContact(updatedContact);
        addressBook[index] = updatedContact;
    } else {
        console.log("Contact Not Found!");
    }
}

// UC5: Ability to delete a contact by name
function deleteContact(name) {
    addressBook = addressBook.filter(contact => contact.firstName !== name);
}

// UC6: Ability to count the number of contacts
function getContactCount() {
    return addressBook.reduce((count) => count + 1, 0);
}

// UC7: Ability to check for duplicate entries
function addContactWithDuplicateCheck(contact) {
    if (addressBook.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
        console.log("Duplicate Contact Found!");
        return;
    }
    addContact(contact);
}