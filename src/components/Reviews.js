export default Reviews = ({ reviews }) => {
  return (
    <>
      <h4 className="subtitle has-text-weight-bold">
        Reviews (Overall{" "}
        {reviews.reduce((a, c) => a + c.rating, 0) / reviews.length}/5)
      </h4>
      {reviews.map((review) => (
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
    </>
  );
};
