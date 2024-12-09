const form = document.getElementsByClassName('form');
const successMessage = document.getElementById('success-message');

// Adiciona o evento de submissão ao formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o comportamento padrão de envio
  
  // Criação da requisição para enviar os dados do formulário via Formspree
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      successMessage.style.display = 'grid'; // Exibe a mensagem de sucesso
      // Redireciona para a página de contato após 3 segundos
      setTimeout(function() {
        window.location.href = "#contato"; // Redireciona para a seção de contato na mesma página
      }, 3000); // Delay de 3 segundos
    } else {
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  })
  .catch(error => {
    console.error('Erro ao enviar o formulário:', error);
    alert("Erro ao enviar mensagem. Tente novamente.");
  });
});
