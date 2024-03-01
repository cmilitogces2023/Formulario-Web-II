const form = document.getElementById('registrationForm');
const registrationsList = document.getElementById('registrationsList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
  registrations.push({ name, email });
  localStorage.setItem('registrations', JSON.stringify(registrations));
  displayRegistrations();
  form.reset();
});

function displayRegistrations() {
  registrationsList.innerHTML = '';
  const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
  registrations.forEach((registration, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${registration.name}</strong> - ${registration.email}`;
    registrationsList.appendChild(li);
  });
}

displayRegistrations();