import { Dispatch} from 'redux';
export default () => (next: Dispatch ) => (action: any) => {
    if (process.env.NODE_ENV !== 'production') {
      const { type, payload, meta } = action;
      console.groupCollapsed(type);
      console.log('Payload:', payload);
      console.log('Meta:', meta);
      console.groupEnd();
    }
  
    return next(action);
  };