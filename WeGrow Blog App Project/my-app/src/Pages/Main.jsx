import React from "react";
import {auth,provider} from "../firebase_cofig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import online from '../images/online.png';
import avatarimg from "../images/avatar.jpg";
import blogger from '../images/blogger.jpg';
import { Link } from "react-router-dom";
 function Main({setIsAuth}){
    
    return(
        <div className="">
            <div className="bg-header">
            <div className="container text-white pt-5 pb-5">
                <div className="col-7">
                <h3 className="">Welcome To WeGrow | Share Your Thoughts </h3>
                <p className="text-light fw-small">Start a blog and share your thoughts,ideas and achievements among your community and grow together.Improve your writing skills by posting the most creative and attractive content as blogs</p>
                <Link to="/createPost"><p className="btn bg-warning text-white ps-5 pe-5">Start blog</p></Link>
                </div>
            </div>
            </div>
            <div className="d-flex flex-wrap col-lg-12 container justify-content-between sec-2">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
                    <div className="m-2 p-3 bg-white text-center rounded shadow">
                    <img src={online} alt="icon" width="40px" height="40px" className="mt-2"></img>
                    <p className="fw-small text-secondary mt-3">Start a blog and share your thoughts,ideas and achievements among your community and grow together</p>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 ">
                    <div className="m-2 p-3 bg-white text-center rounded shadow">
                    <img src={online} alt="icon" width="40px" height="40px" className="mt-2"></img>
                    <p className="fw-small text-secondary mt-3">Share your tech stories, latest trends, important resources, contests, workshops with your amigos </p>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
                    <div className="m-2 p-3 bg-white text-center rounded shadow">
                    <img src={online} alt="icon" width="40px" height="40px" className="mt-2"></img>
                    <p className="fw-small text-secondary mt-3">Improve your writing skills by posting the most creative content with attractive statements</p>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap container">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 mb-3">
                    <img src={blogger} alt="img" className="w-100"></img>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 mb-3 pt-5">
                    <h4 className="mt-5">Lets Grow <span className="text-warning">Together</span></h4>
                    <p className="text-secondary mt-3">Social publishing platform that is open to all and home to a diverse array of stories, ideas, and perspectives. Anyone from the college community can be an individual contributor, add popular topics on info range from mental health to social media, and from world affairs and trending news to productivity hacks. </p>
                </div>
            </div>

        <Footer/>    
            
        </div>
    );
 }
 export default Main;