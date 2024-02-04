import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default Details = () => {
  const location = useLocation();
  const details = location.state;
  return (
    <div className="my-5 browse">
      <h1 className="title mb-5 has-text-centered">{details.name}</h1>
      <Carousel className="details-carousel">
        {details.photos.map((i) => (
          <figure className="image is-4by3">
            <img src={i} alt="Placeholder image" />
          </figure>
        ))}
      </Carousel>
    </div>
  );
};
