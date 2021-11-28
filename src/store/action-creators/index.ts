import * as AuthActionCreators from './auth';
import * as UserActionCreators from '../../components/user/user.actions';

export default {
    ...AuthActionCreators,
    ...UserActionCreators
}