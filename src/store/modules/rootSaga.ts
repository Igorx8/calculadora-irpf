import { all } from 'redux-saga/effects';

import funcionarios from './funcionarios/sagas';

export default function* rootSaga(): Generator{
    return yield all([funcionarios]);
}