export const SINGLE_BLOG = "SINGLE_BLOG"

export const singleBlog = (item) => {
    return {
        type:SINGLE_BLOG,
        payload : item
    }
} 