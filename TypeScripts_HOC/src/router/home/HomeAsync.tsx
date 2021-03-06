import Loadable  from 'react-loadable';
import AsyncLoader from '../../components/AsyncLoader'
import { IProps } from './Home'
// const loadableOptions: LoadableExport.OptionsWithoutRender<IProps> = {
//     loader: () => import('./Home'),
//     loading: AsyncLoader,
// };
const loadableOptions: LoadableExport.OptionsWithoutRender<IProps> = {
    loader: () => import(/* webpackChunkName: "Home" */ './Home'),
    loading: AsyncLoader,
};
export default Loadable(loadableOptions)