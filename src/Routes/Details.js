import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItineraryPanel from "../components/ItineraryPanel";
import Reviews from "../components/Reviews";

export default function Details() {
  const location = useLocation();
  const details = location.state;
  return (
    <div className="my-5 browse">
      <h1 className="title has-text-centered">{details.name}</h1>
      <div className="narrow-container">
        <article className="message is-dark my-5">
          <h4 className="subtitle has-text-weight-bold">
            Destinations - {details.destinations.join(", ")}
          </h4>
          <div className="message-body">{details.description}</div>
        </article>
        <Carousel>
          {details.photos.map((i) => (
            <figure className="image is-4by3">
              <img src={i} alt="Placeholder image" />
            </figure>
          ))}
        </Carousel>
        <ItineraryPanel itinerary={details.itinerary} />

        <nav className="level my-5">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Duration</p>
              <p className="title">
                {details.duration} days / {details.duration - 1} nights
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Price</p>
              <p className="title">${details.discountedPrice}</p>
            </div>
          </div>
        </nav>
        <nav className="level my-5 py-5">
          <div className="level-item has-text-centered">
            <div className="select is-rounded">
              <select>
                <option>Select a Date</option>
                {details.bookings.map(({ available, date }) => (
                  <option key={date} disabled={!available}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <button className="button is-success is-rounded">Book now</button>
          </div>
        </nav>
        <Reviews reviews={details.reviews} />
      </div>
    </div>
  );
}
