import * as funcao from '../src/common/functions'
import funcionarios from './pessoas.json'

import { test, expect } from 'vitest'

test('Testando o retorno da funcao calculaSalarioIr e o tipo do retorno', () => {
        const funcionario1 = funcionarios[0]
        const salarioIr = funcao.calculaSalarioIr(funcionario1.salario, funcionario1.desconto, funcionario1.dependentes)
        expect(salarioIr).toBeTypeOf('number')
        expect(salarioIr).toBe(594.03)
})

test('Testando o retorno da funcao calculaSalarioIrpf e o tipo do retorno', () => {
    const funcionario2 = funcionarios[1]
    const salarioIr = funcao.calculaSalarioIr(funcionario2.salario, funcionario2.desconto, funcionario2.dependentes)
    const salarioIrpf = funcao.calculaSalarioIrpf(salarioIr)
    expect(salarioIrpf).toBeTypeOf('number')
    expect(salarioIrpf).toBe(0)
})

test('Testando a funcao verificaCamposVazios', () => {
    const funcionario3 = funcionarios[2]
    const existeCampoVazio = funcao.verificaCamposVazios(funcionario3)
    expect(existeCampoVazio).toBe(false)
})