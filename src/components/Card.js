/**
 * card component that displays card info in a card format 
 * 
 * @param {*} name  name of the fruit 
 * @param {*} image image that shows the fruit 
 * @param {*} calories amount of calories the fruit has
 */
const Card = ({ name, img, calories }) => {
  return (
    <section>
      <img src={img} />
      <h1 className="title is-2 has-text-weight-bold	">{name}</h1>
      <h1 className="subtitle is-2">{calories}</h1>
    </section>
  );
};
