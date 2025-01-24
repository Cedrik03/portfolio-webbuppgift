
const toggleBtn = document.getElementById('toggle-info');
if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        const extraInfo = document.getElementById('extra-info');
        if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
            extraInfo.style.display = 'block';
            this.textContent = 'Visa mindre';
        } else {
            extraInfo.style.display = 'none';
            this.textContent = 'Visa mer';
        }
    });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const checkbox = document.querySelector('input[type="checkbox"]').checked;

        if (!name || !email || !message || !checkbox) {
            alert("Vänligen fyll i alla fält och godkänn villkoren.");
            event.preventDefault();
        } else {
            alert("Formuläret har skickats!");
        }
    });
}
