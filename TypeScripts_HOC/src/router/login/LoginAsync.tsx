import loadable from 'react-loadable';
import AsyncLoader from '../../components/AsyncLoader';
import { IProps } from './Login';

const loadableOptions: LoadableExport.OptionsWithoutRender< IProps > = {
    loader: () => import(/* webpackChunkName: "Login" */ './Login'),
    loading: AsyncLoader,
    delay: 3000
}
export default loadable(loadableOptions)