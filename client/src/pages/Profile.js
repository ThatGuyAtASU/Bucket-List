import React from "react";
import UserNavBar from "../components/UserNavBar";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";
import ProfilePicModal from "../components/profilePicModal";
import DeleteAccModal from "../components/deleteAccModal";

function Profile() {

    return <>
        <DeleteAccModal />
        <ProfilePicModal />
        <UserNavBar />
        <UserInfo />
        <Footer />
    </>

}

export default Profile;