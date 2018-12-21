
import Loadable  from 'react-loadable';
import AsyncLoader from '../../components/AsyncLoader';
import { IProps } from './jsl';
const loadableOptions: LoadableExport.OptionsWithoutRender<IProps> = {
    loader: () => import(/* webpackChunkName: "Home" */ './jsl'),
    loading: AsyncLoader,
};
export default Loadable(loadableOptions)