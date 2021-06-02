import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { updateUser } from '../actions/user';
import User from '../states/user';

const initialState: User = {
  name: '',
  count: 0,
};

const user = reducerWithInitialState<User>(initialState)
  .case(updateUser, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .build();

export default user;
