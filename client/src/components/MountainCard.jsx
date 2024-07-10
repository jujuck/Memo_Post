import PropTypes from "prop-types";
import mountainImage from "../assets/images/mountains_default.jpg";

/** One Piece of Puzzle, don't forget to uncomment line 2 and 8 */
function mountainCard({ mountain }) {
  return (
    <article
      className="card"
      style={{ backgroundImage: `url(${mountainImage})` }}
    >
      <div>
        <h2>{mountain.title}</h2>
        <h3>{mountain.subtitle}</h3>
        <p>{mountain.summary}</p>
        <h6>
          {mountain.name} - <small>{mountain.birthday.split("T")[0]}</small>
        </h6>
      </div>
    </article>
  );
}
/** One piece of Puzzle, don't forget to uncomment line 1 */
mountainCard.propTypes = {
  mountain: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  }).isRequired,
};
export default mountainCard;
