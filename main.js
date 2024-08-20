const form = document.getElementById('form-adicionar-contato');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizaTabela();
})

function adicionarLinhas(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td class="button-copy"><button onclick="navigator.clipboard.writeText('${inputNomeContato.value} ${inputTelefoneContato.value}')" title="Copiar ao clipboard"><img src="./Images/copy.png" alt="logo de copiar"></button></td>`;
        linha += `</tr>`;
        
        linhas += linha;

        inputNomeContato.value = '';
        inputTelefoneContato.value = '';
}

function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
};

function copyClipboard(){

}