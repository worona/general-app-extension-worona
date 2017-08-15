import { setStatic, compose } from 'recompose';
import sagas from './sagas/client';

const GeneralApp = () => null;

export default compose(
  setStatic('sagas', sagas),
)(GeneralApp);
