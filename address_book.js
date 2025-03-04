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

