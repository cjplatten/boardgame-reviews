import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSingleReview } from "../utils/api";

const Home = () => {
  const [randomReviews, setRandomReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let randomReviewIds = [];
    const randomNumber = () => Math.floor(Math.random() * 23) +1;

    while (randomReviewIds.length < 3) {
      const randomReviewId = randomNumber();
      console.log(randomReviewId);
      if (randomReviewIds.indexOf(randomReviewId) === -1) {
        randomReviewIds.push(randomReviewId);
      }
      console.log(randomReviewIds);
    }
    console.log(randomReviewIds);

    randomReviewIds.map((review_id) => {
      getSingleReview(review_id).then((review) => {
        console.log(review);
        setRandomReviews((currReviews) => {
          return [...currReviews, review];
        });
      });
    });
  }, []);
  console.log(randomReviews);

  return (
    <div>
      <section>
        <h3>Hello and welcome!</h3>
        <p>
          Dust off your dice, polish up your pieces and settle yourself in for
          some opinions on boardgames!
        </p>
        {/* <p>
          To browse, click on the big green "All Reviews" below, select one of
          the categories from the dropdown above or chose one of the randomly
          selected reviews at the bottom of this page.{" "}
        </p>
        <p>Happy reading!</p> */}
      </section>
      <section>
        <Link id="home-all-reviews-link" to="/categories/all">
          <button className="home-all-reviews-button">All Reviews</button>
        </Link>
      </section>
      <section className="random-reveiws">
        <h4>Random Reviews</h4>
        <ul className="random-reveiws-grid">
          {randomReviews.map((review) => {
            return (
              <li key={review.review_id + "-grid"}>
                <img
                  className="random-review-grid-img"
                  src={review.review_img_url}
                  alt={review.title}
                />
                <h6>{review.title}</h6>
                <p>{review.category}</p>
                <p></p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Home;
