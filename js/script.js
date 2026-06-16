document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (contactForm.action.includes('SEU_FORM_ID')) {
    formStatus.textContent = 'Formulário ainda não configurado: crie uma conta gratuita em formspree.io e substitua "SEU_FORM_ID" pelo ID do seu formulário em index.html.';
    return;
  }

  submitButton.disabled = true;
  formStatus.textContent = 'Enviando...';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      formStatus.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
      contactForm.reset();
    } else {
      formStatus.textContent = 'Não foi possível enviar a mensagem. Tente novamente ou use o WhatsApp/e-mail.';
    }
  } catch (error) {
    formStatus.textContent = 'Erro de conexão. Tente novamente ou use o WhatsApp/e-mail.';
  } finally {
    submitButton.disabled = false;
  }
});
