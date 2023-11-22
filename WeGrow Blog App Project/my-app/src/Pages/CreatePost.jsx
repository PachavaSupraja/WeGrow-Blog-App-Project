import React,{useState} from "react";
import { addDoc , collection } from "firebase/firestore";
import { db,auth } from "../firebase_cofig";
import { useNavigate } from "react-router-dom";
 function CreatePost(isAuth){
    const [title,setTitle]=useState("");
    const [postText,setPostText]=useState("");

    const postCollectionRef=collection(db,"posts");
    let navigate=useNavigate();

    const CreatePost=async()=>{
        await addDoc(postCollectionRef,{
            title,
            postText,
            author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
        });
        navigate("/AllBlogs")
    }

    return(
        <div className="createPostPage bg">
            <div className="cpContainer bg- card col-lg-6 col-md-8 col-sm-8 col-8 mt-5 mb-5 shadow">
                <div className="card-body">
                <h4 className="card-title text-center mb-4">Create a Blog</h4>
            <div className="inputGp">
                <input placeholder="Enter blog title"
                onChange={(event)=>{
                    setTitle(event.target.value)
                }}
                className='bg-transparent border form-control form-control-sm w-100'
                ></input>
            </div>
            <div className="inputGp">
                <textarea placeholder="Post.."
                onChange={(event)=>{
                    setPostText(event.target.value)
                }} className='bg-transparent border form-control form-control-sm w-100 mt-3'
                ></textarea>
            </div>
            <button onClick={CreatePost} className='w-100 bg-warning text-light'>Submit Post</button>
                </div>
            

        </div>
        </div>
        
    );
 }
 export default CreatePost;