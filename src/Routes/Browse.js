import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

export default function Browse() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch("/static/mockdata.json");
      const responseData = await response.json();
      const localReviews = JSON.parse(localStorage.getItem("reviews"));
      if (localReviews?.length) {
        localReviews.forEach((pkg) => {
          const pkgFromServer = responseData.find((p) => p.id == pkg.id);
          if (pkgFromServer) pkgFromServer.reviews.push(pkg.review);
        });
      }
      setPackages(responseData);
    })();
  }, []);
  const handleClick = (e) => {
    navigate("/details/" + e, { state: packages.find((p) => p.id == e) });
  };

  return (
    <div className="my-5 browse">
      <h1 className="title mb-5 has-text-centered">Browse Packages</h1>
      <div className="columns is-flex-wrap-wrap">
        {packages.map((p) => {
          const cardProps = {
            title: p.name,
            body: p.description,
            image: p.photos[0],
            discountedPrice: p.discountedPrice,
            suggestedPrice: p.suggestedPrice,
            duration: p.duration,
            id: p.id,
            destinations: p.destinations,
            ratings:
              p.reviews.reduce((a, c) => a + c.rating, 0) / p.reviews.length,
            available: !!p.bookings.find((b) => b.available > 0),
            handleClick: handleClick,
          };
          return (
            <div
              key={p.id}
              className="column is-half-tablet is-one-third-desktop"
            >
              <Card {...cardProps} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
