// import { GLOBALTYPES } from '../actions/globalTypes';

// const chatReducer = (chat=[], action) => {
//     switch (action.type){
//         case GLOBALTYPES.CHAT:
//             return {
//                 // ...state,
//                 chat: [
//                 chat.filter((chat) => chat.id !== action.id),
//                 { chat: action.message, id: action.id },
//                 ],
//             }
//         default:
//             return chat;
//     }
// }

// export default chatReducer

import { GLOBALTYPES } from '../actions/globalTypes';

const chatReducer = (chat=[], action) => {
    switch (action.type){
        case GLOBALTYPES.CHAT:
            return action.payload;
        default:
            return chat;
    }
}

export default chatReducer