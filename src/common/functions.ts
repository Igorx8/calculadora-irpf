export const calculaSalarioIr = (salario: number, desconto: number, numDependentes: number) => {
    let deducaoPorDependente = 164.56
    let salarioIr = Number(salario) - Number(desconto) - (Number(numDependentes) * deducaoPorDependente)
    return salarioIr
}

export const calculaSalarioIrpf = (salarioIr: number) => {
    let aliquota = 0
    let parcelaADeduzir = 0
    if (salarioIr <= 1903.98) return 0
    else if (salarioIr > 1903.98 && salarioIr <= 2826.65) {
        aliquota = 0.075
        parcelaADeduzir = 142.80
    }
    else if (salarioIr > 2826.65 && salarioIr <= 3751.05) {
        aliquota = 0.15
        parcelaADeduzir = 354.8
    }

    else if (salarioIr > 3751.05 && salarioIr <= 4664.68) {
        aliquota = 0.225
        parcelaADeduzir = 636.13
    }
    else if (salarioIr > 4664.68) {
        aliquota = 0.275
        parcelaADeduzir = 869.36
    }

    return salarioIr * aliquota - parcelaADeduzir
}

export const verificaCamposVazios = (objeto: any) => {
    let vazio = false

    Object.values(objeto).forEach(campo => {
        if(campo === '' || campo === undefined || campo === null){
            vazio = true
        }
        
    })

    return vazio
}