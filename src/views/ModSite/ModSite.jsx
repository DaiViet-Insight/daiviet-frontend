import React from "react";
import './ModSite.css';
import { BackToTopButton } from "../../components/Button";
import {  QuickAccess } from "../../components";
import Post from "../containers/ModSite/Post";

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

const ModSite = () => {

    return (
        <div className="blog">
            <div className="blog-left">
                <div className="posts">
                    {posts.map((post) => (<Post key={post.id} post={post}/>))}
                </div>
            </div>
            <div className="blog-right">
                {/* <QuickAccess /> */}
                {/* add somethings */}
            </div>
        </div>
    );
};

export default ModSite;