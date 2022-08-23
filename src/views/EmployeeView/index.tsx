import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { calculaSalarioIr, calculaSalarioIrpf, verificaCamposVazios } from "../../common/functions"
import { Botao } from "../../components/Botao"
import { Input } from "../../components/Input"
import { DefaultTemplate } from "../../components/Template"
import { Titulo } from "../../components/Titulo"
import * as funcionariosActions from '../../store/modules/funcionarios/actions'
import { IFuncionario, IStateResponse } from "../../store/modules/types"

export const EmployeeView = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [salario, setSalario] = useState('')
    const [desconto, setDesconto] = useState('')
    const [dependentes, setDependentes] = useState('')
    const title = id ? 'Editar funcionário' : 'Cadastro de funcionário'

    useSelector((state: IStateResponse) => {
        const funcionario = state.funcionarioReducer.funcionarioStore.find((funcionario: IFuncionario) => funcionario.id === id) as IFuncionario
        useEffect(() => {
            if (funcionario) {
                setNome(funcionario.nome)
                setCpf(funcionario.cpf)
                setSalario(String(funcionario.salario))
                setDesconto(String(funcionario.desconto))
                setDependentes(String(funcionario.dependentes))

            }
            else{
                setNome('')
                setCpf('')
                setSalario('')
                setDesconto('')
                setDependentes('')
            }
        }, [id])
    })

    const handleClick = () => {
        const salarioIr = calculaSalarioIr(Number(salario), Number(desconto), Number(dependentes))
        const descontoIrpf = calculaSalarioIrpf(salarioIr)

        const funcionario: IFuncionario = {
            nome,
            cpf,
            salario,
            desconto,
            dependentes,
            descontoIrpf
        }

        if (verificaCamposVazios(funcionario)) {
            toast.error('Preencha todos os campos antes de enviar o formulário')
        }
        else {
            //envio o id aqui, senão cai na verificação como campo vazio, caso exista ele edita, se não gera um novo na ação de salvar
            funcionario.id = id ? id : ''
            dispatch(funcionariosActions.funcionarioRequest(funcionario))
            navigate('/irrf', { replace: true})
        }

    }

    return (
        <DefaultTemplate>
            <Titulo title={title} />
            <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
                <Input label="Nome" labelFor="nome" type="text" placeholder="Digite o nome" setValue={setNome} value={nome} />
                <Input label="CPF" labelFor="cpf" type="text" placeholder="Digite o cpf" setValue={setCpf} value={cpf} />
                <Input label="Salário bruto" labelFor="salariob" type="number" placeholder="Digite o salário bruto" setValue={setSalario} value={salario} />
                <Input label="Desconto da previdência" labelFor="descontop" type="number" placeholder="Digite o valor do desconto" setValue={setDesconto} value={desconto} />
                <Input label="Nº de dependentes" labelFor="ndependentes" type="number" placeholder="Digite o número de dependentes" setValue={setDependentes} value={dependentes} />
            </div>
            <Botao color="bg-blue-400" text="Salvar" action={handleClick} />
        </DefaultTemplate>
    )
}