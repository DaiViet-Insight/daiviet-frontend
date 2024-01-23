import React from "react";
import './ProfileOverview.css';
import { PostSkeleton, ProfilePanel } from "../../components";
import { PostPanel } from "../containers";

const posts = [
    {
        id: 1,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 1",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna."
    },
    {
        id: 2,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 2",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna."
    },
    {
        id: 3,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 3",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius. Cras nec semper magna. Nullam euismod nisl et nunc lacinia, eu lacinia ipsum ultrices. Sed sit amet semper nisl. Nullam eget semper nisl. Nulla facilisi. Nulla facilisi. Donec id semper magna. Nulla facilisi. Nulla facilisi. Donec id semper magna."
    },
    {
        id: 4,
        avatar: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        username: "Author",
        creationDate: "2024-01-01",
        title: "Post 4",
        subscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit quis efficitur tincidunt, sem sem sodales libero, nec tincidunt ipsum velit eu sem. Duis ac metus ac nisl ultricies varius."
    }
];

const ProfileOverview = () => {
    return (
        <div className="profile-overview">
            <div className="profile-overview__container">
                <div className="profile-overview__left">
                    {
                        posts.length > 0?
                            posts.map((post) => (
                                <PostPanel key={post.id} post={post} />
                            ))
                        :
                            [...Array(10)].map((_, index) => (
                                <PostSkeleton key={index} />
                            ))
                    }
                </div>
                <div className="profile-overview__right">
                    <ProfilePanel />
                    <div className="profile-overview__right-info">
                        <div className="profile-overview__right-info__posts">
                            <span className="profile-overview__right-info__posts-count">{posts.length}</span>
                            <span className="profile-overview__right-info__posts-label">posts</span>
                        </div>
                        <div className="profile-overview__right-info__comments">
                            <span className="profile-overview__right-info__comments-count">10</span>
                            <span className="profile-overview__right-info__comments-label">comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileOverview;