// import React,{useEffect, useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { register } from '../redux/actions/authAction';
// import { v4 as uuidv4 } from 'uuid';

// function Signup(props){

// 	// const [users, setUsers] = useState([]);
// 	const [username, setUsername] = useState('');
// 	const [password1, setPassword1] = useState('');
// 	const [password2, setPassword2] = useState('');

// 	const [passType1, setPassType1] = useState(true);
// 	const [passType2, setPassType2] = useState(true);

// 	// reducer
// 	// const {auth, alert} = useSelector(state => state)
// 	// console.log(auth)	
// 	// console.log(alert)
// 	// var auth = JSON.parse(localStorage.getItem('auth'));

// 	const {auth} = useSelector(state => state)
// 	let {user} = auth

// 	const dispatch = useDispatch()

// 	const handleSignup=()=>{

// 		if(user===null){
// 			user=[{'username':'aaa','password':'aaa'},];
// 		}

// 		if(password1===password2){
			
// 			const same = user.filter(d=>d.username===username);

// 			if(same.length===0){
// 				user = [...user,{'id': uuidv4(), 'username':username,'password':password1}];
// 				// action
// 				dispatch(register(user))
// 				// localStorage.setItem('auth',JSON.stringify(auth));
// 				localStorage.setItem('userlogined',username);
// 				setUsername('');
// 				setPassword1('');
// 				setPassword2('');
// 				props.afterSignup(username);
// 			}else{
// 				alert(username+' exist!')
// 			}
// 		}else{
// 			alert('Passwords are not matching')
// 		}
// 	}

// 	// const handleSignup=()=>{

// 	// 	// let auth = {
// 	// 	// 	username,
// 	// 	// 	password1,
// 	// 	// 	password2
// 	// 	// }	
// 	// 	// setUsers([...users, data])
// 	// 	// // const users = [...data,{'username':username,'password':password1}];
// 	// 	// dispatch(register(users))

// 	// 	if(auth===null){
// 	// 		auth=[{'username':'aaa','password':'aaa'},];
// 	// 	}

// 	// 	if(password1===password2){
			
// 	// 		const same = auth.filter(d=>d.username===username);

// 	// 		if(same.length===0){
// 	// 			auth = [...auth,{'username':username,'password':password1}];
// 	// 			// action
// 	// 			dispatch(register(auth))
// 	// 			// localStorage.setItem('auth',JSON.stringify(auth));
// 	// 			localStorage.setItem('userlogined',username);
// 	// 			setUsername('');
// 	// 			setPassword1('');
// 	// 			setPassword2('');
// 	// 			props.afterSignup(username);
// 	// 		}else{
// 	// 			alert(username+' exist!')
// 	// 		}
// 	// 	}else{
// 	// 		alert('Passwords are not matching')
// 	// 	}
// 	// }
	
// 	return(
// 		<div className='signup'>
// 			<div className='email'>
// 				<h2 className='email-name'>Email</h2>
// 				<input className="input-field" type='text' 
// 				value={username}
// 				onChange={e=>setUsername(e.target.value)}
// 				placeholder='Username'/>
// 			</div>
			
// 			<input className="input-field" type={passType1?'password':'text'}
// 			value={password1}
// 			onChange={e=>setPassword1(e.target.value)}
// 			 />
			
// 			<button onClick={()=>{setPassType1(!passType1)}}>
// 			{passType1?'show':'hide'}</button>


			
// 			<input className="input-field" type={passType2?'password':'text'} 
// 			value={password2}
// 			onChange={e=>setPassword2(e.target.value)}
// 						/>
			
// 			<button onClick={()=>{setPassType2(!passType2)}}>
// 			{passType2?'show':'hide'}</button>




// 			<button onClick={handleSignup}>signup</button>
			

// 		</div>
// 	);
// }


// export default Signup;

import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../redux/actions/authAction';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Signup(props){

	// const [users, setUsers] = useState([]);
	const [username, setUsername] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [passType1, setPassType1] = useState(true);
	const [passType2, setPassType2] = useState(true);

	const {auth} = useSelector(state => state)
	let {user} = auth

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = () => {
		navigate('/login')
	}

	const handleSignup=()=>{

		if(user===null){
			user=[{'username':'user','password':'pass'},];
		}

		if(password1===password2){
			
			const same = user.filter(d=>d.username===username);

			if(same.length===0){
				user = [...user,{'id': uuidv4(), 'username':username,'password':password1}];
				// action
				dispatch(register(user))
				// localStorage.setItem('auth',JSON.stringify(auth));
				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword1('');
				setPassword2('');
				// props.afterSignup(username);
				navigate('/login')
			}else{
				alert(username+' exist!')
			}
		}else{
			alert('Passwords are not matching')
		}
	}
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
					<input  type={passType1?'password':'text'}
						value={password1}
						onChange={e=>setPassword1(e.target.value)} class="text" placeholder="Password"/>
					<input  type={passType2?'password':'text'} 
						value={password2}
						onChange={e=>setPassword2(e.target.value)} class="text" placeholder="Password"/>
					<button onClick={handleSignup}>
						Signup
					</button>
					{/* <p><a href="">forgot password?</a></p> */}
					<div class="btn" onClick={handleLogin}>
						<button>Login</button>
					</div>



				</div>
			</div>
	</div>
	);
}


export default Signup;

