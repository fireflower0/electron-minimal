import { actionCreatorFactory } from 'typescript-fsa';
import User from '../states/user';

const actionCreator = actionCreatorFactory('USER');

export const updateUser = actionCreator<Partial<User>>('UPDATE');
