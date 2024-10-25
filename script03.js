document.getElementById('occurrenceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando valores dos campos de entrada
    const studentName = document.getElementById('studentName').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    // Criando o item da ocorrência
    const occurrenceItem = document.createElement('div');
    occurrenceItem.classList.add('occurrence-item');

    // Adicionando conteúdo ao item da ocorrência
    occurrenceItem.innerHTML = `
        <h3>${studentName}</h3>
        <p class="date">Data: ${new Date(date).toLocaleDateString('pt-BR')}</p>
        <p>${description}</p>
    `;

    // Adicionando a ocorrência à lista
    document.getElementById('occurrenceList').appendChild(occurrenceItem);

    // Limpando os campos de entrada
    document.getElementById('studentName').value = '';
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
});
