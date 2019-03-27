import React from "react";
import UserNavBar from "../components/UserNavBar";
import Jumbotron from "../components/Jumbotron";
import RecentItems from "../components/RecentItems"
import Footer from "../components/Footer";


function MembersHome(props){

    return <>
    <UserNavBar />
    <Jumbotron/>
    <RecentItems/>
    <Footer/>
    </>
}

export default MembersHome;