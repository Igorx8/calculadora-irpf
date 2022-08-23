import { Tabela } from "../../components/Tabela"
import { DefaultTemplate } from "../../components/Template"
import { Texto } from "../../components/Texto"
import { Titulo } from "../../components/Titulo"
import { useDispatch, useSelector } from "react-redux"
import { IFuncionario, IStateResponse } from "../../store/modules/types"
import * as funcionariosActions from '../../store/modules/funcionarios/actions'

export const IrffView = () => {
    const dispatch = useDispatch()

    let ths: Array<string> = []
    let tds: Array<any> = []
    let tfs: Array<string> = []

    useSelector((state: IStateResponse) => {
        ths = ['Nome', 'CPF', 'Salário', 'Desconto', 'Dependentes', 'Desconto IRPF']
        if(state.funcionarioReducer.funcionarioStore.length > 0){
            tds = [...state.funcionarioReducer.funcionarioStore]
            tfs = Object.keys(state.funcionarioReducer.funcionarioStore[0])
        }
        return { ths, tds, tfs }
    })
    
    const excluirFuncionario = (funcionario: IFuncionario) => {
        if(confirm(`Tem certeza que deseja excluir o funcionario ${funcionario.nome}?`)) dispatch(funcionariosActions.removerFuncionario(funcionario))
    }

    return (
        <DefaultTemplate>
            <Titulo title="Tabelas e calculos do IRRF"></Titulo>
            <Texto content="A tabela do IR é um dos principais instrumentos para auxiliar os contribuintes na hora de enviar as informações fiscais para a Receita. Afinal, é nesse documento que constam as alíquotas do Imposto de Renda" />
            <Texto content="Isso quer dizer que é essa a fonte para você saber qual é o percentual que deve ser aplicado sobre seus rendimentos. Portanto, na hora de fazer o cálculo e declarar seus rendimentos, ter essa tabela é fundamental para que você não envie nenhum dado errado e, consequentemente, não caia na malha fina." />
            <Titulo title="Seus funcionários" />
            <Tabela tableHeaders={ths} tableFields={tfs} tableData={tds} enableActions={true} removeAction={excluirFuncionario} route="/employee" />
        </DefaultTemplate>
    )
}