import { useState } from "react";
import { useParams } from "react-router";

export default function Reviews({ reviews }) {
  const packageId = useParams().id;
  const sessionReview = sessionStorage.getItem(packageId);
  const [userReview, setUserReview] = useState(
    JSON.parse(sessionReview || "{}")
  );

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target);
    const review = {
      id: "You",
      userid: "You",
      userName: "You",
      rating: formData.get("rating"),
      review: formData.get("review"),
    };
    sessionStorage.setItem(packageId, JSON.stringify(review));
    setUserReview(review);
  };

  const allReviews = userReview.rating ? [...reviews, userReview] : reviews;
  return (
    <>
      <h4 className="subtitle has-text-weight-bold">
        Reviews (Overall{" "}
        {allReviews.reduce((a, c) => a + c.rating, 0) / allReviews.length}/5)
      </h4>
      {allReviews.map((review) => (
        <div key={review.id} className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Image"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{review.userName}</strong>{" "}
                  <small>@{review.userid}</small>
                  <br />
                  <p>
                    {new Array(review.rating).fill(<>&#9733;</>).map((r) => r)}
                    {new Array(5 - review.rating)
                      .fill(<>&#9734;</>)
                      .map((r) => r)}
                  </p>
                  {review.review}
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
      {!userReview.rating && (
        <div className="box">
          <h4 className="subtitle has-text-weight-bold">Create a review</h4>
          <form onSubmit={handleReviewSubmit}>
            <div className="field my-4">
              <label className="label">Rating:</label>
              <div className="control">
                <div className="select">
                  <select name="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                  </select>
                </div>
              </div>
            </div>
            <textarea
              className="textarea my-4"
              name="review"
              placeholder="Add a review"
            ></textarea>
            <div className="control">
              <button type="submit" className="button is-link">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
