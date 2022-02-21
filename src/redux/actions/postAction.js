import { GLOBALTYPES } from "./globalTypes";

export const postAction = (posts) => async (dispatch) => {
    // const check = valid(data)
    // if(check.errLength > 0)
    // return dispatch({type: GLOBALTYPES.ALERT, payload: check.errMsg})

    try {
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        // const res = await postDataAPI('register', data)

        localStorage.setItem('posts',JSON.stringify(posts));
		// localStorage.setItem('userlogined',auth.username);
        // console.log(res)
        console.log(posts)
        dispatch({ 
            type: GLOBALTYPES.POST, 
            payload: {
                post: posts
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

// export const likePost = (post) => async (dispatch) => {
//     try {
//         dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
//     //   const { data } = await api.likePost(id);
//       const { post } = JSON.parse(localStorage.getItem('posts'));
//     //   const { title } = post.title
//     //   console.log(title)
//       dispatch({ 
//           type: GLOBALTYPES.LIKE, 
//           payload: {
//                 likePost: post.likePost + 1
//           } 
//         });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };