import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {History} from 'history';
import rootReducer from '../stores/rootReducer';
import IStore from '../stores/IStore';
import logger from '../components/logger-middleware'

export default class ProviderUtility {

    public static createProviderStore(initialState: Partial<IStore> = {}, history: History = null): IStore {
        const store: any = createStore(
            rootReducer(history),
            initialState,
                applyMiddleware(
                    routerMiddleware(history),
                    logger
                ),
        );

        return store;
    }

}
