export default function Card(props) {
  const {
    image,
    title,
    body,
    discountedPrice,
    suggestedPrice,
    duration,
    id,
    destinations,
    ratings,
    available,
    handleClick,
  } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
        {!available && <div className="unavailable">Unavailable</div>}
      </div>
      <h1 className="card-header-title">
        {title} - {destinations.join(", ")}
      </h1>
      <div className="card-content">
        <span className="has-text-weight-semibold">Ratings: {ratings}/5</span>
        <div className="content">{body}</div>
        <p className="has-text-weight-semibold">
          {duration} days / {duration - 1} nights
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span className="linethrough pr-2 has-text-grey">
            ${suggestedPrice}{" "}
          </span>{" "}
          <span className="is-size-5 has-text-success-dark">
            ${discountedPrice}
          </span>
        </p>
        <p className="card-footer-item">
          <button
            className="button is-link is-outlined is-light is-fullwidth"
            disabled={!available}
            onClick={() => handleClick(id)}
          >
            View Details
          </button>
        </p>
      </footer>
    </div>
  );
}
