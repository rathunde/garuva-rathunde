document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('lead-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = 'Revise os campos obrigatórios para continuar.';
    return;
  }
  status.textContent = 'Formulário validado. Na publicação, conecte-o ao e-mail ou CRM responsável.';
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 30 ? 'rgba(12, 23, 22, .96)' : '#0c1716';
}, { passive: true });
