import { services } from "../Lists/Links";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title word1="our" word2="services" />
      {/* <Service /> */}

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
