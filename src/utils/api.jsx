import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-boardgames-cjp.herokuapp.com/api/",
});

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  return data.categories;
};

export const getReviews = async (category, sort_by) => {
  let path = "/reviews";
  if (category && category !== "all") path += `?category=${category}`;
  if (sort_by && category && category !== "all") path += `&sort_by=${sort_by}`
  if (sort_by && (!category || category === "all")) path += `?sort_by=${sort_by}`
  
  const { data } = await reviewsApi.get(path);
  return data.reviews;
};

export const getSingleReview = async (reviewId) => {
  let path = `/reviews/${reviewId}`;
  const { data } = await reviewsApi.get(path);
  return data.review;
};

export const getReviewComments = async (reviewId) => {
  let path = `/reviews/${reviewId}/comments`;
  const { data } = await reviewsApi.get(path);
  return data.comments;
};

export const patchVotes = async (reviewId, incVotes) => {
  let path = `/reviews/${reviewId}`;
  const { data } = await reviewsApi.patch(path, { inc_votes: incVotes });
  return data.review;
};

export const postComment = async (reviewId, newCommentBody, user) => {
  let path = `/reviews/${reviewId}/comments`;
  const { data } = await reviewsApi.post(path, {
    username: user,
    body: newCommentBody,
  });
  return data.comment;
};

export const getUsers = async () => {
  let path = `/users`;
  const { data } = await reviewsApi.get(path);
  return data.users;
};
