import React from "react";
import UserNavBar from "../components/UserNavBar";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";
import ProfilePicModal from "../components/profilePicModal";

function Profile() {

    return <>
        <ProfilePicModal />
        <UserNavBar />
        <UserInfo />
        <Footer />
    </>

}

export default Profile;