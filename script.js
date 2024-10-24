const inputImagem = document.getElementById('inputImagem');
const imagemExibida = document.getElementById('imagemExibida');

inputImagem.addEventListener('change', function() {
    const arquivo = this.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imagemExibida.src = e.target.result;
        imagemExibida.style.display = 'block'; // Exibir a imagem
    };

    if (arquivo) {
        reader.readAsDataURL(arquivo);
    }
});
