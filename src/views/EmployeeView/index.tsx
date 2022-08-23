import { useState } from "react"
import { useDispatch } from "react-redux"
import { Botao } from "../../components/Botao"
import { Input } from "../../components/Input"
import { DefaultTemplate } from "../../components/Template"
import { Titulo } from "../../components/Titulo"
import * as funcionariosActions from '../../store/modules/funcionarios/actions'

export const EmployeeView = () => {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [salario, setSalario] = useState('')
    const [desconto, setDesconto] = useState('')
    const [dependentes, setDependentes] = useState('')
    const [descontoIrpf, setDescontoIrpf] = useState('')

    const dispatch = useDispatch();

    let novoSalario = Number(salario)
    let novoDesconto = Number(desconto)
    let novoDependentes = Number(dependentes)
    let novoDescontoIrpf= Number(desconto)

    const handleClick = () => {
        dispatch(funcionariosActions.salvarFuncionario({
            id: Date.now(),
            nome,
            cpf,
            salario: novoSalario,
            desconto: novoDesconto,
            dependentes: novoDependentes,
            descontoIrpf: novoDescontoIrpf
        }))
    }
    
    return (
        <DefaultTemplate>
            <Titulo title="Cadastro de funcionário" />
                <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
                    <Input label="Nome" labelFor="nome" type="text" placeholder="Digite o nome" setValue={setNome}/>
                    <Input label="CPF" labelFor="cpf" type="text" placeholder="Digite o cpf" setValue={setCpf}/>
                    <Input label="Salário bruto" labelFor="salariob" type="number" placeholder="Digite o salário bruto" setValue={setSalario} />
                    <Input label="Desconto da previdência" labelFor="descontop" type="number" placeholder="Digite o valor do desconto" setValue={setDesconto} />
                    <Input label="Nº de dependentes" labelFor="ndependentes" type="number" placeholder="Digite o número de dependentes" setValue={setDependentes} />
                </div>
            <Botao color="bg-blue-400" text="Salvar" action={handleClick}/>
        </DefaultTemplate>
    )
}