export const ACTION_FUNCIONARIO_LISTAR = 'ACTION_FUNCIONARIO_LISTAR';
export const ACTION_FUNCIONARIO_SALVAR_SUCESSO = 'ACTION_FUNCIONARIO_SALVAR_SUCESSO';
export const ACTION_FUNCIONARIO_EDITADO_SUCESSO = 'ACTION_FUNCIONARIO_EDITADO_SUCESSO';
export const ACTION_FUNCIONARIO_REMOVIDO_SUCESSO = 'ACTION_FUNCIONARIO_REMOVIDO_SUCESSO';
export const ACTION_FUNCIONARIO_REQUEST_SALVAR = 'ACTION_FUNCIONARIO_REQUEST_SALVAR';
export const ACTION_FUNCIONARIO_REQUEST_EXCLUIR = 'ACTION_FUNCIONARIO_REQUEST_EXCLUIR';
export const ACTION_FUNCIONARIO_ERROR = 'ACTION_FUNCIONARIO_ERROR';

export interface IFuncionario {
    id?: number;
    nome: string;
    cpf: string;
    salario: number;
    desconto: number;
    dependentes: number;
    descontoIrpf: number;
}

export interface IGeneratorResponse {
    type: string;
    payload: IFuncionario;
}


export interface IState {
    funcionarioStore: IFuncionario[]
}

export interface IStateResponse {
    funcionarioReducer: {
        funcionarioStore: IFuncionario[]
    }
}