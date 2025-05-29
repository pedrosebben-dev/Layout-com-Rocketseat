interface Pessoa {
    name: string   
    idade: number
    profissão?: string
}

const pessoa: Pessoa = {
    name: 'Pedro',
    idade: 25
}

const outraPessoa: Pessoa = {
    name: 'Pedro',
    idade:  25,
    profissão: 'Developer'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum :