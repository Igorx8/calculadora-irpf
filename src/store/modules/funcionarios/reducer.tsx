import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as types from '../types';
import { IFuncionario, IState } from '../types';

const initialState: IState = {
    funcionarioStore: []
};


export default function funcionariosReducer(state = initialState, action: PayloadAction<IFuncionario>) {
    switch (action.type) {
        case types.ACTION_FUNCIONARIO_LISTAR:
            return {
                ...state
            };
            case types.ACTION_FUNCIONARIO_SALVAR_SUCESSO:
                action.payload.id = String(Date.now()),

                toast.success('Funcionário salvo com sucesso');
                return {
                ...state,
                funcionarioStore: [...state.funcionarioStore, action.payload]
            };
        case types.ACTION_FUNCIONARIO_EDITADO_SUCESSO:
            const estadoEditar = { ...state };
            const index = estadoEditar.funcionarioStore.findIndex((funcionario: IFuncionario) => funcionario.id === action.payload.id);
            if (index || index == 0) {
                estadoEditar.funcionarioStore[index] = action.payload;
                toast.success('Funcionário editado com sucesso');
                return {
                    ...estadoEditar
                };
            }

            toast.error('Não foi possível editar o funcionário, recarregue a página e tente novamente');
            return state;
        case types.ACTION_FUNCIONARIO_REMOVIDO_SUCESSO:
            const estadoDelete = { ...state };
            const idx = estadoDelete.funcionarioStore.findIndex((funcionario: IFuncionario) => funcionario.id === action.payload.id);
            if (idx || idx == 0) {
                estadoDelete.funcionarioStore.splice(idx, 1);
                toast.success('Funcionário removido com sucesso');
                return {
                    ...estadoDelete
                };
            }

            toast.error('Não foi possível remover o funcionário, recarregue a página e tente novamente');
            return state;

        case types.ACTION_FUNCIONARIO_ERROR:
            toast.error('Não foi possível realizar essa ação, recarregue a página e tente novamente');
        default:
            return state;
    }
}