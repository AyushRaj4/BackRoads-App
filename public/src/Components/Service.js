import { services } from "../Lists/Links";

const Service = (props) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={props.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{props.heading}</h4>
        <p className="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </div>
    </article>
  );
};

export default Service;
