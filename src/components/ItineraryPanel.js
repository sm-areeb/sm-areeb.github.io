import { useState } from "react";

export default function ItineraryPanel({ itinerary }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mt-5">
      <article className="panel is-danger">
        <p className="panel-heading">Itinerary</p>
        <p className="panel-tabs">
          {itinerary.map((_, index) => (
            <a
              key={index}
              className={(activeTab == index && "is-active") || ""}
              onClick={() => setActiveTab(index)}
            >
              Day {index + 1}
            </a>
          ))}
        </p>
        {itinerary[activeTab].map((day) => {
          return (
            <a className="panel-block has-text-weight-semibold">
              <span className="panel-icon">
                <i>&#x1F550;</i>
              </span>
              {day.time} - {day.activity}
            </a>
          );
        })}
      </article>
    </div>
  );
}
