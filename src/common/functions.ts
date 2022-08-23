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

export function validaCPF(cpfEnviado: string){
    const cpfLimpo = cpfEnviado.replace(/\D+/g, '');  //remove tudo que não for número

    const isSequencia = () => {
        return cpfLimpo[0].repeat(cpfLimpo.length ) === cpfLimpo;
    }

    const criaDigito = (partialCpf: string) => {
        const cpfArray = Array.from(partialCpf);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
          ac += (regressivo * Number(val));
          regressivo--;
          return ac;
        }, 0);
      
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito); 
    }

    if(cpfLimpo === 'undefined') return false;
    if(cpfLimpo.length != 11) return false;
    if(isSequencia()) return false;
  
    const cpfParcial = cpfLimpo.slice(0, -2);
    const digito1 = criaDigito(cpfParcial);
    const digito2 = criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
  
    return novoCpf === cpfLimpo;
}
    
    const cpf = validaCPF('705.484.450-52');
  
  if(cpf){
    console.log('CPF válido');
  }
  else{
    console.log('CPF inválido');
  }