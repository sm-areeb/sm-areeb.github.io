export default Card = (props) => {
  const { image, title, body, discountedPrice, duration } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <div className="content">{body}</div>
        <p>{discountedPrice}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
};
