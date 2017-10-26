import devStore from './store.dev';
import prodStore from './store.prod';

const store =
  process.env.NODE_ENV === 'production'
    ? prodStore
    : devStore;

export default store;
