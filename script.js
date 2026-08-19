document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('lead-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
    status.textContent = 'Revise os campos obrigatórios para continuar.';
    return;
  }
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Enviando…';
  status.textContent = 'Enviando sua solicitação com segurança…';
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 30 ? 'rgba(12, 23, 22, .96)' : '#0c1716';
}, { passive: true });
