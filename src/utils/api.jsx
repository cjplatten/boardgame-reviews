 import axios from 'axios';

 const reviewsApi = axios.create({
     baseURL: 'https://nc-boardgames-cjp.herokuapp.com/api/'
 })
 

export const getCategories = async () => {
    const { data } = await reviewsApi.get('/categories')
    return data.categories;
}

export const getReviews = async () => {
    let path = '/reviews'
    const { data } = await reviewsApi.get(path)
    console.log(data)
    return data.reviews;
}