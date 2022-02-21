import { GLOBALTYPES } from "./globalTypes";

export const messageAction = (messages) => async (dispatch) => {

    try {
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        localStorage.setItem('messages',JSON.stringify(messages));

        console.log("hai",messages)
        dispatch({ 
            type: GLOBALTYPES.MESSAGE, 
            payload: {
                message: messages
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

