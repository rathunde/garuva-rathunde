document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('lead-form');
if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      status.textContent = 'Confira os campos obrigatórios para continuar.';
      return;
    }
    button.disabled = true;
    button.textContent = 'Encaminhando…';
    status.textContent = 'Aguarde o retorno do serviço de envio. Se não concluir, entre em contato por e-mail.';
    window.setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Enviar interesse ↗';
      status.textContent = 'Se o envio não foi concluído, tente novamente ou escreva para leo@rathunde.com.';
    }, 15000);
  });
  window.addEventListener('pageshow', () => {button.disabled = false;button.textContent = 'Enviar interesse ↗';});
}
