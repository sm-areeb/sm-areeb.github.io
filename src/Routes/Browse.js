import { useEffect, useState } from "react";
import Card from "../components/Card";

export default Browse = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/static/mockdata.json");
      const responseData = await response.json();
      setPackages(responseData);
    })();
  }, []);
  return (
    <>
      <h1>Browse Packages</h1>
      {packages.map((p) => {
        const cardProps = {
          title: p.name,
          body: p.description,
          image: p.photos[0],
          discountedPrice: p.discountedPrice,
          suggestedPrice: p.suggestedPrice,
          duration: p.duration,
        };
        return <Card key={p.id} {...cardProps} />;
      })}
    </>
  );
};
