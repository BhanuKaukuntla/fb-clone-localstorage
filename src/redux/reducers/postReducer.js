// import { GLOBALTYPES } from '../actions/globalTypes';

// const postReducer = (state = {}, action) => {
//     switch (action.type){
//         case GLOBALTYPES.POST:
//             return action.payload;
//         case GLOBALTYPES.LIKE:
//             return post.map((getPost) => (getPost.title === action.payload.title ? action.payload : getPost))
//         default:
//             return state;
//     }
// }

// export default postReducer

import { GLOBALTYPES } from '../actions/globalTypes';

const postReducer = (post=[], action) => {
    switch (action.type){
        case GLOBALTYPES.POST:
            return action.payload;
        // case GLOBALTYPES.LIKE:
        //     return post.map((getPost) => (getPost.title === action.payload.title ? action.payload : getPost))
        default:
            return post;
    }
}

export default postReducer