// import { GLOBALTYPES } from "./globalTypes";

// export const chatAction = ({message, id}) => async (dispatch) => {
//     // const check = valid(data)
//     // if(check.errLength > 0)
//     // return dispatch({type: GLOBALTYPES.ALERT, payload: check.errMsg})

//     try {
//         dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

//         localStorage.setItem('chats',JSON.stringify(message, id));

//         dispatch({ 
//             type: GLOBALTYPES.CHAT, 
//             message,
//             id
//         })
//     } catch (err) {
//         dispatch({ 
//             type: GLOBALTYPES.ALERT, 
//             payload: {
//                 error: err.response
//             } 
//         })
//     }
// }

import { GLOBALTYPES } from "./globalTypes";

export const chatAction = ({message}) => async (dispatch) => {
    // const check = valid(data)
    // if(check.errLength > 0)
    // return dispatch({type: GLOBALTYPES.ALERT, payload: check.errMsg})

    try {
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        localStorage.setItem('chats',JSON.stringify(message));

        dispatch({ 
            type: GLOBALTYPES.CHAT, 
            payload: {
                chat: message
            }
        })
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response
            } 
        })
    }
}
