import { GlobalModelState } from './global';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {};
}

export interface ConnectState {
  loading: Loading;
  global: GlobalModelState;
}
