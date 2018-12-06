import * as Loadable  from 'react-loadable';
import AsyncLoader from '../components/AsyncLoader'
import { IPros } from '../components/hello2'
const loadableOptions: LoadableExport.OptionsWithoutRender< IPros > = {
    loader: () => import('../components/hello2'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions)