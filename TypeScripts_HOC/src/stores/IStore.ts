import { RouterState } from 'connected-react-router';
import { Store } from 'redux';

export default interface IStore extends Store< IStore >{
    readonly router: RouterState;
}