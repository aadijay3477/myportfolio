import { createReducer, on } from '@ngrx/store';
import { FormActions } from './form.actions';

export const formFeatureKey = 'form';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

