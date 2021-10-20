 import axios from 'axios';

 const reviewsApi = axios.create({
     baseURL: 'https://nc-boardgames-cjp.herokuapp.com/api/'
 })
 

export const getCategories = async () => {
    const { data } = await reviewsApi.get('/categories')
    return data.categories;
}

export const getReviews = async (category) => {
    let path = '/reviews'
    if (category) path += `?category=${category}`
    const { data } = await reviewsApi.get(path)
    return data.reviews;
}

export const getSingleReview = async (reviewId) => {
    let path = `/reviews/${reviewId}`
    const { data } = await reviewsApi.get(path)
    console.log(data)
    return data.review;
}