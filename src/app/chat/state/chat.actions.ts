import {createAction, props} from '@ngrx/store';


export const loadUser = createAction(
  "[Chat] Load UserName", props<{ username: string }>()
)
