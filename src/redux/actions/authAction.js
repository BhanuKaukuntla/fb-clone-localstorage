import { GLOBALTYPES } from './globalTypes'

// export const login = () => async (dispatch) => {
//     try {
//         dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
//         // const res = await postDataAPI('login', data)
//         const auth = JSON.parse(localStorage.getItem('auth'));
//         console.log(auth)
//         dispatch({ 
//             type: GLOBALTYPES.AUTH, 
//             payload: {
//                 user: auth
//             } 
//         })

//         localStorage.setItem("firstLogin", true)
//         dispatch({ 
//             type: GLOBALTYPES.ALERT, 
//             payload: {
//                 success: auth
//             } 
//         })
        
//     } catch (err) {
//         dispatch({ 
//             type: GLOBALTYPES.ALERT, 
//             payload: {
//                 error: err.response.msg
//             } 
//         })
//     }
// }

export const register = (auth) => async (dispatch) => {
    // const check = valid(data)
    // if(check.errLength > 0)
    // return dispatch({type: GLOBALTYPES.ALERT, payload: check.errMsg})

    try {
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        // const res = await postDataAPI('register', data)

        localStorage.setItem('auth',JSON.stringify(auth));
		// localStorage.setItem('userlogined',auth.username);
        // console.log(res)
        console.log(auth)
        dispatch({ 
            type: GLOBALTYPES.AUTH, 
            payload: {
                user: auth
            } 
        })

        // localStorage.setItem("firstLogin", true)
        // dispatch({ 
        //     type: GLOBALTYPES.ALERT, 
        //     payload: {
        //         success: auth
        //     } 
        // })
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response
            } 
        })
    }
}