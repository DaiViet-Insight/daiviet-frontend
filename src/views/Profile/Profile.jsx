import React from "react";
import { Routes, Route } from "react-router-dom";
import './Profile.css';
import { ProfileHeader } from '../containers';
import ProfileOverview from "../ProfileOverview/ProfileOverview";
import SavedPost from "../SavedPost/SavedPost";
import UpvotedPost from "../UpvotedPost/UpvotedPost";
import DownvotedPost from "../DownvotedPost/DownvotedPost";
import Notification from "../Notification/Notification";

const profile = {
    id: 1,
    username: "tuanne",
    name: "Tuan Tran",
    profileImageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
}

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeader profile={profile} />
            <div className="profile__content">
                <Routes>
                    <Route path="/:username" element={<ProfileOverview />} />
                    <Route path="/:username/saved" element={<SavedPost />} />
                    <Route path="/:username/upvoted" element={<UpvotedPost />} />
                    <Route path="/:username/downvoted" element={<DownvotedPost />} />
                    <Route path="/:username/notifications" element={<Notification />} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;