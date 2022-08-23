import * as types from '../types';
import { IFuncionario } from '../types';

export function listarFuncionarios() {
    return {
        type: types.ACTION_FUNCIONARIO_LISTAR,
    };
}

export function salvarFuncionario(funcionario: IFuncionario) {
    return {
        type: types.ACTION_FUNCIONARIO_SALVAR_SUCESSO,
        payload: funcionario,
    };
}

export function editarFuncionario(funcionario: IFuncionario) {
    return {
        type: types.ACTION_FUNCIONARIO_EDITADO_SUCESSO,
        payload: funcionario,
    }
}

export function removerFuncionario(funcionario: IFuncionario) {
    return {
        type: types.ACTION_FUNCIONARIO_REMOVIDO_SUCESSO,
        payload: funcionario,
    }
}

export function funcionarioRequest(funcionario: IFuncionario){
    return {
        type: types.ACTION_FUNCIONARIO_REQUEST_SALVAR,
        payload: funcionario,
    }
}

export function funcionarioError() {
    return {
        type: types.ACTION_FUNCIONARIO_ERROR,
    };
}