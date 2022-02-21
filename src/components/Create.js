// import React, {useState, useEffect} from "react";
// import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
// import ShowPost from "./ShowPost";

// const getDatafromLS=()=>{
//   const data = localStorage.getItem('books');
//   if(data){
//     return JSON.parse(data);
//   }
//   else{
//     return []
//   }
// }

// const Create = () => {
//   const [books, setbooks]=useState(getDatafromLS());

//   // input field states
//   const [title, setTitle]=useState('');
//   const [author, setAuthor]=useState('');
//   // const [isbn, setIsbn]=useState('');

//   // form submit event
//   const handleAddBookSubmit=(e)=>{
//     e.preventDefault();
//     // creating an object
//     let book={
//       title,
//       author: localStorage.getItem('userlogined'),
//     }
//     setbooks([...books,book]);
//     setTitle('');
//     setAuthor('');
//   }

//   // delete book from LS
//   const deleteBook=(isbn)=>{
//     const filteredBooks=books.filter((element,index)=>{
//       return element.isbn !== isbn
//     })
//     setbooks(filteredBooks);
//   }
//   const users = JSON.parse(localStorage.getItem('auth'));
// 	console.log(users)
//   // saving data to local storage
//   useEffect(()=>{
//     localStorage.setItem('books',JSON.stringify(books));
//   },[books])
//   return (
//     <div className="create">
//       <div className="create__first">
//         {/* <div className="create__first-img">
//           <span>
//             <img src="/images/fawad1.jpg" alt="user" />
//           </span>
//         </div> */}
//         <div className="create__first-input">
//           {/* <input
//             type="text"
//             className="create__first-inputs"
//             placeholder="Shakil what are your mind? "
//           /> */}
//           <form autoComplete="off" className='form-group'
//           onSubmit={handleAddBookSubmit}>
//             <input type="text" className='create__first-inputs' placeholder="what are your thinking? " required
//             onChange={(e)=>setTitle(e.target.value)} value={title}></input>
//             {/* <button type="submit" className='btn btn-success btn-md'>
//               Post
//             </button> */}
//           </form>
//         </div>
//       </div>
//       <div className="create__second">
//         <span className="create__second-icon">
//           <FaVideo className="redColor" />{" "}
//           <span className="text">Live Video</span>
//         </span>
//         <span className="create__second-icon">
//           <FaRegFileImage className="greenColor" />{" "}
//           <span className="text">Photo / Video</span>
//         </span>
//         <span className="create__second-icon">
//           <FaRegGrinAlt className="orangeColor" />{" "}
//           <span className="text">Feeling</span>
//         </span>
//       </div>
//       <ShowPost state={books} deleteBook={deleteBook}/>
//     </div>
//   );
// };

// export default Create;

import React, {useState, useEffect} from "react";
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ShowPost from "./ShowPost";
import { postAction } from "../redux/actions/postAction";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


const getDatafromLS=()=>{
  const data = localStorage.getItem('posts');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const Create = () => {
  const time = moment().calendar();  
  console.log(time) 
  const date = new Date();
  console.log(date.getMinutes())
  const {posts} = useSelector(state => state)
  let {post} = posts
  console.log(post)
  // let getPosts = post.post.post
  // console.log(getPosts)

  // const [posts, setposts]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  // const [like, setLike] = useState(0)
  // const [author, setAuthor]=useState('');
  // const [isbn, setIsbn]=useState('');
  const dispatch = useDispatch()

  // form submit event
  const handleAddpostsubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let newPost={
      // id: uuidv4(),
      title,
      createdAt: time,
      author: localStorage.getItem('userlogined'),
    }
    post = [...post,newPost]
    // setposts([...posts,post]);
    setTitle('');
    // setAuthor('');
    dispatch(postAction(post))
  }

  // delete book from LS
  // const likePost=(like)=>{
  //   const filteredposts=post.filter((element,index)=>{
  //     return element.like === like
  //   })
  //   setposts(filteredposts);
  // }
  // const deleteBook=(isbn)=>{
  //   const filteredposts=post.filter((element,index)=>{
  //     return element.isbn !== isbn
  //   })
  //   setposts(filteredposts);
  // }
  // const users = JSON.parse(localStorage.getItem('auth'));
	// console.log(users)

  // localStorage.setItem('posts',JSON.stringify(posts));

  // saving data to local storage
  // useEffect(()=>{
  //   localStorage.setItem('posts',JSON.stringify(posts));
  // },[posts])

  // const [posts, setposts]=useState(getDatafromLS());

  // // input field states
  // const [title, setTitle]=useState('');
  // const [author, setAuthor]=useState('');
  // // const [isbn, setIsbn]=useState('');

  // // form submit event
  // const handleAddpostsubmit=(e)=>{
  //   e.preventDefault();
  //   // creating an object
  //   let post={
  //     title,
  //     author: localStorage.getItem('userlogined'),
  //   }
  //   setposts([...posts,post]);
  //   setTitle('');
  //   setAuthor('');
  // }

  // // delete book from LS
  // const deleteBook=(isbn)=>{
  //   const filteredposts=posts.filter((element,index)=>{
  //     return element.isbn !== isbn
  //   })
  //   setposts(filteredposts);
  // }
  // // const users = JSON.parse(localStorage.getItem('auth'));
	// // console.log(users)

  // localStorage.setItem('posts',JSON.stringify(posts));

  // // saving data to local storage
  // // useEffect(()=>{
  // //   localStorage.setItem('posts',JSON.stringify(posts));
  // // },[posts])
  return (
    <div className="create">
      <div className="create__first">
        {/* <div className="create__first-img">
          <span>
            <img src="/images/fawad1.jpg" alt="user" />
          </span>
        </div> */}
        <div className="create__first-input">
          {/* <input
            type="text"
            className="create__first-inputs"
            placeholder="Shakil what are your mind? "
          /> */}
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddpostsubmit}>
            <input type="text" className='create__first-inputs' placeholder="what are your thinking? " required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            {/* <button type="submit" className='btn btn-success btn-md'>
              Post
            </button> */}
          </form>
        </div>
      </div>
      <div className="create__second">
        <span className="create__second-icon">
          <FaVideo className="redColor" />{" "}
          <span className="text">Live Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegFileImage className="greenColor" />{" "}
          <span className="text">Photo / Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegGrinAlt className="orangeColor" />{" "}
          <span className="text">Feeling</span>
        </span>
      </div>
      <ShowPost state={post}/>
    </div>
  );
};

export default Create;

