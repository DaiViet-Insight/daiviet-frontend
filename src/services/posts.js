import { makeRequest } from './makeRequest';

export function getPosts() {
    return makeRequest('/posts');
}

export function getPost(postId) {
    try {
        return makeRequest(`api/posts/${postId}`);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export function getRootCommentOfPost(postId) {
    return makeRequest(`api/posts/${postId}/comments`);
}