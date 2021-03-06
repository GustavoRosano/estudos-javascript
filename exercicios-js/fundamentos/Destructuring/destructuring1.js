const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log("nome: " + n, "idade: " + i + " anos");

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log("Logradouro: " + logradouro + ",", "Nº: " + numero + " -", "cep: " + cep);
console.log(logradouro  + ",", numero  + " -", cep);