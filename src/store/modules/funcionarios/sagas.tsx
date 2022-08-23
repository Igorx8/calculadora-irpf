import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const funcionarios = (state: types.IState) => state.funcionarios;

function* salvarFuncionarioRequest({ payload }: types.IGeneratorResponse) {
    try {
        if(payload.id) {
            yield put(actions.editarFuncionario(payload))
        }
        yield put(actions.salvarFuncionario(payload));
    } catch (error) {
        yield put(actions.funcionarioError());
    }
}

function* removeFuncionarioRequest({ payload }: types.IGeneratorResponse) {
    try {
        yield put(actions.removerFuncionario(payload));
    } catch (error) {
        yield put(actions.funcionarioError());
    }
}

function* listarFuncionarioRequest() {
    try {
        alert('passou')
        yield select(funcionarios)
    }
    catch (error) {
        yield put(actions.funcionarioError());
    }
}

export default all([
    takeLatest(types.ACTION_FUNCIONARIO_REQUEST_SALVAR, salvarFuncionarioRequest),
    takeLatest(types.ACTION_FUNCIONARIO_LISTAR, listarFuncionarioRequest),
    takeLatest(types.ACTION_FUNCIONARIO_REQUEST_EXCLUIR, removeFuncionarioRequest),
])