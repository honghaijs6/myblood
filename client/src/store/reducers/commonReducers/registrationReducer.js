import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../../actions/commonActions/userActions';

export default function(state = {}, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { registering: true };
        case REGISTER_SUCCESS:
            return {};
        case REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}