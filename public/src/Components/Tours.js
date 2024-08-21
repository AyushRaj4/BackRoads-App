import { tours } from "../Lists/Links";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title word1="featured" word2="tours" />
      <Tour />
    </section>
  );
};

export default Tours;
