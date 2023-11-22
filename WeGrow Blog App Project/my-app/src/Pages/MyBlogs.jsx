import React,{useState,useEffect} from "react";
import { getDocs,collection,deleteDoc,doc } from "firebase/firestore";
import { db,auth } from "../firebase_cofig";
import avatarimg from "../images/avatar.jpg";

function MyBlogs({isAuth}){
    const [postLists,setPostList]=useState([]);
    const postsCollectionRef=collection(db,"posts");

    useEffect(()=>{
        const getPosts=async()=>{
            const data=await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
        };
        getPosts();
    });

    const deletePost=async(id)=>{
        const postDoc=doc(db,"posts",id);
        await deleteDoc(postDoc);
    }

    return(
        <div className="pd-5">
            {
                postLists.map((post)=>{
                    
                    return <div>{post.author.id === auth.currentUser.uid && (
                    
                        <div className="post post col-lg-8 col-md-8 col-sm-8 mx-auto bg-white rounded p-4 mb-5 mt-5 shadow">
                        <div className="postHeader">
                            <div className="mt-3 mb-3">
                            <h4>{post.title}</h4>
                            </div>
                            <div className="deletePost">
                            {post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    X
                  </button>
                )}
                               
                                
                            </div>
                        </div>
                        <div className="postTextContainer">{post.postText}</div>
                        <div className="d-flex p-3">
                        <img src={avatarimg} alt="" className="rounded-circle mt-4 me-3" width="30px" height="30px"></img>
                        <p className="mt-4 fs-6 fw-bold"><strong>Author </strong>@{post.author.name}</p>
                        </div>
                        
                        </div>
                      )}
                      </div>
                })
            }

        </div>
    );}
 export default MyBlogs;