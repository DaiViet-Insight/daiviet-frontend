import { makeRequest } from './makeRequest';

export function getPosts() {
    return makeRequest('/posts');
}

export function getPost(postId) {
    return makeRequest(`/posts/${postId}`);
}

export function getRootCommentOfPost(postId) {
    return makeRequest(`/posts/${postId}/comments`);
}