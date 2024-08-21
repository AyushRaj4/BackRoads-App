import { tours } from "../Lists/Links";

const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((tour) => {
        const { img, country, date, price, days, heading, id } = tour;
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{heading}</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {country}
                </p>
                <p>{days} days</p>
                <p>from ₹{price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Tour

