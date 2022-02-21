import { GLOBALTYPES } from '../actions/globalTypes';

const messageReducer = (message=[], action) => {
    switch (action.type){
        case GLOBALTYPES.MESSAGE:
            return action.payload;
        default:
            return message;
    }
}

export default messageReducer