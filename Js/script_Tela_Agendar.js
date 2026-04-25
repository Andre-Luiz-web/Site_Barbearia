const form = document.querySelector('.form_agendar');


// Selecionando os campos
const campoData = document.getElementById('data');
const campoHora = document.getElementById('hora');


// Defininição da data para agendamento, pelo dia atual
const hoje = new Date().toISOString().split("T")[0];
campoData.setAttribute("min", hoje);


campoHora.setAttribute("min", "08:00");
campoHora.setAttribute("max", "21:00");


// Validação de envio de formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const barbeiro = document.getElementById('barbeiro').value;
    const data = campoData.value; // já vem como string "YYYY-MM-DD"
    const hora = campoHora.value;
    const obs = document.getElementById('obs').value.trim();

    
    // Validação básica
    if (!nome || !telefone || !barbeiro || !data || !hora) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    
    // Validação de telefone
    if (telefone.length < 9) {
        alert('Digite um telefone válido com pelo menos 9 dígitos.');
        return;
    }

    
    // Validação de data 
    if (data < hoje) {
        alert("Você não pode agendar para uma data passada!");
        return;
    }

    
    // Validação de horário
    if (hora < "08:00" || hora > "21:00") {
        alert("Horário inválido! Funcionamos das 08h às 21h.");
        return;
    }

    
    alert(`Agendamento confirmado!\n\nNome: ${nome}\nTelefone: ${telefone}\nBarbeiro: ${barbeiro}\nData: ${data}\nHora: ${hora}\nObs: ${obs}`);
});
