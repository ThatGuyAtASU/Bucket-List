import React from "react";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import RecentItems from "../components/RecentItems"
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal"

function Home(){

    return <>
    <SignUpModal/>
    <LoginModal/>
    <NavBar />
    <Jumbotron/>
    <RecentItems/>
    <Footer/>
    </>
}

export default Home;
