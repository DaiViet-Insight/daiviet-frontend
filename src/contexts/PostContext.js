import React from "react";
import { useContext, useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPost, getRootCommentOfPost } from "../services/posts";

const PostContext = React.createContext();

export function usePost() {
    return useContext(PostContext)
}

export function PostProvider({ children }) {
    const { id: postId } = useParams();
    const { data: post, loading, error } = useAsync(() => getPost(postId), [postId]);
    const { data: commentsFetch, loading: loadingComments, error: errorComments } = useAsync(() => getRootCommentOfPost(postId), [postId]);
    const [comments, setComments] = useState([])
    useEffect(() => {
        let listComments = [];
        for (let i = 0; i < commentsFetch?.length; i++) {
            const comment = {
                parentId: commentsFetch[i].rootCommentId,
                id: commentsFetch[i].id,
                content: commentsFetch[i].content,
                fullname: commentsFetch[i].User.fullname,
                ...commentsFetch[i]
            };
            listComments = [...listComments, comment];
        }
        setComments(listComments);
    }, [loadingComments]); // Run this effect when commentsFetch changes

    const commentsByParentId = useMemo(() => {
        const group = {}
        comments.forEach(comment => {
            group[comment.parentId] ||= []
            group[comment.parentId].push(comment)
        })
        return group
    }, [comments])

    useEffect(() => {
        if (post?.comments == null) return
        setComments(post.comments)
    }, [post?.comments])

    const getReplies = (parentId) => {
        return commentsByParentId[parentId]
    }

    return (
        <PostContext.Provider
            value={{
                post: { postId, ...post },
                rootComments: commentsByParentId[null],
                getReplies,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}
