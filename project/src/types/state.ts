import { store } from '../store/index';

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
