import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';

import IStore from './IStore';
import {History} from 'history';

export default (history: History): Reducer<IStore> => {
    const reducerMap: ReducersMapObject = {
        router: connectRouter(history) as any,
    };

    return combineReducers(reducerMap);
};
