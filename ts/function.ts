import { Contact } from './contact.js';

export function displayContacts(contacts: Contact[], divListContacts: HTMLDivElement) {
    divListContacts.innerHTML = ''; 
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${contact.getFirstName} ${contact.getLastName}`;
        li.addEventListener('click', () => {
            displayContactDetails(contact);
        });
        divListContacts.appendChild(li);
    });
}

export function displayContactDetails(contact: Contact) {
    const detailFirstName = document.getElementById('detailFirstName') as HTMLInputElement;
    const detailLastName = document.getElementById('detailLastName') as HTMLInputElement;
    const detailBirth = document.getElementById('detailBirth') as HTMLInputElement;
    const detailEmail = document.getElementById('detailEmail') as HTMLInputElement;
    const detailPhone = document.getElementById('detailPhone') as HTMLInputElement;

    detailFirstName.textContent = `First Name: ${contact.getFirstName}`;
    detailLastName.textContent = `Last Name: ${contact.getLastName}`;
    detailBirth.textContent = `Date of Birth: ${contact.getDateOfBirth.toISOString().split('T')[0]}`;
    detailEmail.textContent = `Email: ${contact.getEmail}`;
    detailPhone.textContent = `Phone: ${contact.getPhoneNumber}`;
}
