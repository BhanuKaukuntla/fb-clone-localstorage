// import React,{useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux'

// function Login(props){

// 	const [username, setUsername] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [passType, setPassType] = useState(true);

// 	const dispatch = useDispatch()

// 	// reducer
// 	// const {user} = useSelector(state => state)
// 	const {auth} = useSelector(state => state)
// 	const {user} = auth
// 	console.log(user)
// 	// const auth = dispatch(login())
// 	// var auth = JSON.parse(localStorage.getItem('auth'));
// 	// console.log(auth)

// 	const handleLogin=()=>{

// 		if(user===null){
// 			alert('no user found!');
// 		}
			
			
// 		const same = user.filter(d=>d.username===username);

// 		if(same.length!==0){

// 			if (same[0].password===password){
// 				// action
// 				localStorage.setItem('userlogined',username);
// 				setUsername('');
// 				setPassword('');
// 				props.afterLogin(username);
// 			}
// 			else{
// 				alert('wrong password.');
// 			}
// 		}else{
// 			alert(username+'user not exist!')
// 		}
// 	}

// 	// const handleLogin=()=>{

// 	// 	if(auth===null){
// 	// 		alert('no user found!');
// 	// 	}
			
			
// 	// 	const same = auth.filter(d=>d.username===username);

// 	// 	if(same.length!==0){

// 	// 		if (same[0].password===password){
// 	// 			// action
// 	// 			localStorage.setItem('userlogined',username);
// 	// 			setUsername('');
// 	// 			setPassword('');
// 	// 			props.afterLogin(username);
// 	// 		}
// 	// 		else{
// 	// 			alert('wrong password.');
// 	// 		}
// 	// 	}else{
// 	// 		alert(username+'user not exist!')
// 	// 	}
// 	// }
	
// 	return(
// 		<div className='login'>
		
// 			<input type='text' 
// 			value={username}
// 			onChange={e=>setUsername(e.target.value)}
// 			placeholder='Username'/>
			
// 			<input type={passType?'password':'text'}
// 			value={password}
// 			onChange={e=>setPassword(e.target.value)}
// 			 />
			
// 			<button onClick={()=>{setPassType(!passType)}}>
// 			{passType?'show':'hide'}</button>

// 			<button onClick={handleLogin}>login</button>
	

// 		</div>
// 	);
// }


// export default Login;


import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Login(props){

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passType, setPassType] = useState(true);

	const dispatch = useDispatch()
	const navigate = useNavigate()

	// reducer
	// const {user} = useSelector(state => state)
	const {auth} = useSelector(state => state)
	const {user} = auth
	console.log(user)
	// const auth = dispatch(login())
	// var auth = JSON.parse(localStorage.getItem('auth'));
	// console.log(auth)

	const handleLogin=()=>{

		if(user===null){
			alert('no user found!');
		}
			
			
		const same = user.filter(d=>d.username===username);

		if(same.length!==0){

			if (same[0].password===password){
				// action
				localStorage.setItem('userlogined',username);
				// setUsername('');
				// setPassword('');
				// props.afterLogin(username);
				navigate('/')
			}
			else{
				alert('wrong password.');
			}
		}else{
			alert(username+'user not exist!')
		}
	}

	const handleSignup = () => {
		navigate('/signup')
	}

	// useEffect(() => {
	// 	if(localStorage.getItem('userlogined')!==null){
	// 		navigate('/')
	// 	}
	// },[navigate])

	// const handleLogin=()=>{

	// 	if(auth===null){
	// 		alert('no user found!');
	// 	}
			
			
	// 	const same = auth.filter(d=>d.username===username);

	// 	if(same.length!==0){

	// 		if (same[0].password===password){
	// 			// action
	// 			localStorage.setItem('userlogined',username);
	// 			setUsername('');
	// 			setPassword('');
	// 			props.afterLogin(username);
	// 		}
	// 		else{
	// 			alert('wrong password.');
	// 		}
	// 	}else{
	// 		alert(username+'user not exist!')
	// 	}
	// }
	
	return(
		<div>
			<div class="textbox">
				<h1>
					facebook
				</h1>
				<h2>
					Facebook helps you connect and share with the people in your life.
				</h2>
			</div>


			<div class="container">
				<div class="form">
					<input type="text" class="text" value={username}
						onChange={e=>setUsername(e.target.value)}
						placeholder='Username' placeholder="Enter Your Email or Phone number"/> 
					<input  type={passType?'password':'text'}
						value={password}
						onChange={e=>setPassword(e.target.value)} class="text" placeholder="Password"/>
					<button onClick={handleLogin}>
						Login
					</button>
					{/* <p><a href="">forgot password?</a></p> */}
					<div class="btn" onClick={handleSignup}>
						<button>Signup</button>
					</div>



				</div>
			</div>
	</div>
	);
}


export default Login;
