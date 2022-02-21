import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

// import rootReducer from './reducers/index'

import { composeWithDevTools } from 'redux-devtools-extension'

import auth from './reducers/authReducer'
import alert from './reducers/alertReducer'
import posts from './reducers/postReducer'
import chats from './reducers/chatReducer'
import messages from './reducers/messageReducer'

const initialState = {
    auth: {
        user: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null,
    },
    posts: {
        post: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
    },
    messages: {
        message: localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [],
    }
    // chats: {
    //     chat: localStorage.getItem('chats') ? JSON.parse(localStorage.getItem('chats')) : [],
    // }
    // userSignin: {
    //   userInfo: localStorage.getItem('userInfo')
    //     ? JSON.parse(localStorage.getItem('userInfo'))
    //     : null,
    // },
    // cart: {
    //   cartItems: localStorage.getItem('cartItems')
    //     ? JSON.parse(localStorage.getItem('cartItems'))
    //     : [],
    // },
  };

const rootReducer = combineReducers({
    auth,
    alert,
    posts,
    chats,
    messages
})

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

const DataProvider = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider