// import React,{useState, useEffect} from 'react';
// import Signup from './Signup';
// import Login from './Login';
// // import { Home } from './Home';
// import Post from './Posts';
// // import { Users } from './Users';
// import Navbar from "./Navbar";
// import SideBar from "./SideBar";
// import Posts from "./Posts";
// import ChatBar from "./ChatBar";
// import ChatBox from "./ChatBox";

// function MainScreen(){

// 	const [state, setState] = React.useState(false);
//   const [current, setCurrent] = React.useState({});
//   const openChat = (user) => {
//     setState(true);
//     setCurrent(user);
//   };
//   const closeChat = () => {
//     setState(false);
//   };
//   const user = localStorage.getItem('userlogined');
// 	var [loginScreen, setLoginScreen] = useState(false);
// 	var [signupScreen, setSignupScreen] = useState(false);
// 	var [loginedScreen, setLoginedScreen] = useState(false);


// 	const afterSignup = (username )=> {
// 		setSignupScreen(false); 
// 		setLoginScreen(false);
// 		setLoginedScreen(true);
// 	}

// 	const afterLogout=()=>{
// 		localStorage.removeItem('userlogined');
// 		setSignupScreen(true); 
// 		setLoginScreen(false);
// 		setLoginedScreen(false);
// 	}


// 	useEffect(()=>{
// 		var user=localStorage.getItem('userlogined');
// 		if(user !== null || user !==''){
// 			setSignupScreen(false); 
// 			setLoginScreen(false);
// 			setLoginedScreen(true);
// 		}	
// 	},[]);
	
// 	return(
// 		<div className='mainscreen'>
			

// 			{loginScreen?<div>
// 				<Login afterLogin={afterSignup} />
// 				<button onClick={()=>{setSignupScreen(true); setLoginScreen(false)}}>do signup</button>
// 			</div>:''}
			

// 			{user?<div>
// 				<div>
// 					<Navbar />
// 					<div className="facebook">
// 						<SideBar />
// 						<Posts />
// 						<ChatBar openChat={openChat} />
// 						<ChatBox state={state} current={current} closeChat={closeChat} />
// 					</div>
// 				</div>
				
// 			</div>:(
// 				<div>
// 					<Signup afterSignup={afterSignup} />
// 					<button onClick={()=>{setSignupScreen(false); setLoginScreen(true)}}>do login</button>
// 					{/* <Login afterLogin={afterSignup} />
// 					<button onClick={()=>{setSignupScreen(true); setLoginScreen(false)}}>Login</button> */}
// 				</div>
// 				)}
			
// 		</div>
// 	);
// }


// export default MainScreen;
