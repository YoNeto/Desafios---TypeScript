// Como podemos melhorar o esse código usando TS? 
type humano = {
    nome: string,
    idade: number,
    trabalho: profissao
}

enum profissao {
    atriz,
    padeiro
}

let pessoa1: humano = {
    nome: "maria",
    idade: 29,
    trabalho: profissao.atriz
};

let pessoa2: humano = {
    nome: "roberto",
    idade: 19,
    trabalho: profissao.padeiro
};

let pessoa3: humano ={
    nome: "laura",
    idade: 32,
    trabalho: profissao.atriz,
};
let pessoa4: humano ={
    nome: "carlos",
    idade: 19,
    trabalho: profissao.padeiro
};
