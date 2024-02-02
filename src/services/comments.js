import { makeRequest } from "./makeRequest"

export function createComment({ postId, content, parentId }) {
  return makeRequest(`/api/posts/${postId}/comments/create`, {
    method: "POST",
    data: { 
        content, 
        rootCommentId : parentId,
        postId
    },
  })
}