document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.reservation-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const guests = form.querySelector('input[type="number"]').value;
    const date = form.querySelector('input[type="date"]').value;
    const time = form.querySelector('input[type="time"]').value;

    const confirmationMessage = `
      <div class="confirmation-message">
        <h2 class="reservation-title">Reservation Confirmed</h2>
        <p class="reservation-description">Name: ${name}</p>
        <p class="reservation-description">Phone Number: ${phone}</p>
        <p class="reservation-description">Email: ${email}</p>
        <p class="reservation-description">Guests: ${guests}</p>
        <p class="reservation-description">Date: ${date}</p>
        <p class="reservation-description">Time: ${time}</p>
        <p class="reservation-description">Thank You!</p>
      </div>
    `;

    form.outerHTML = confirmationMessage;
  });
});