import { Contact } from "./contact.js";
import { displayContacts, displayContactDetails } from './function.js';

const contactForm = document.getElementById('contactForm') as HTMLFormElement;
const firstName = document.getElementById('firstName') as HTMLInputElement;
const lastName = document.getElementById('lastName') as HTMLInputElement;
const birth = document.getElementById('birth') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const sendBtn = document.getElementById('sendBtn') as HTMLButtonElement;


const divListContacts = document.getElementById('containListContact') as HTMLDivElement;
const contactlist = document.getElementById('contactlist') as HTMLInputElement;
const addContactBtn = document.getElementById('addContactBtn') as HTMLButtonElement;

const contactDetails = document.getElementById('contactDetails') as HTMLDivElement;
const detailFirstName = document.getElementById('detailFirstName') as HTMLInputElement;
const detailLastName = document.getElementById('detailLastName') as HTMLInputElement;
const detailBirth = document.getElementById('detailBirth') as HTMLInputElement;
const detailEmail = document.getElementById('detailEmail') as HTMLInputElement;
const detailPhone = document.getElementById('detailPhone') as HTMLInputElement;
const editContactBtn = document.getElementById('editContactBtn') as HTMLButtonElement;
const deleteContactBtn = document.getElementById('deleteContactBtn') as HTMLButtonElement;

const editForm = document.getElementById('editForm') as HTMLDivElement;
const editFirstName = document.getElementById('editFirstName') as HTMLInputElement;
const editLastName = document.getElementById('editLastName') as HTMLInputElement;
const editBirth = document.getElementById('editBirth') as HTMLInputElement;
const editEmail = document.getElementById('editEmail') as HTMLInputElement;
const editPhone = document.getElementById('editPhone') as HTMLInputElement;
const saveEditBtn = document.getElementById('saveEditBtn') as HTMLButtonElement;




let contacts: Contact[] = [];

const contact1: Contact = new Contact('John', 'Smith', new Date('2011-05-12'), 'johnsmith@gmail.com', '0652415856');
const contact2: Contact = new Contact('Marie', 'Harry', new Date('1988-07-18'), 'marrie.harry@gmail.com', '0789562325');

contacts.push(contact1, contact2);

displayContacts(contacts, divListContacts);

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newContact = new Contact(
        firstName.value,
        lastName.value,
        new Date(birth.value),
        email.value,
        phone.value
    );

    contacts.push(newContact);
    displayContacts(contacts, divListContacts);
    contactForm.reset(); 
});




