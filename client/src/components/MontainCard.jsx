import PropTypes from "prop-types";
import montainImage from "../assets/images/montains_default.jpg";

/** One Piece of Puzzle, don't forget to uncomment line 2 and 8 */
function MontainCard({ montain }) {
  return (
    <article
      className="card"
      style={{ backgroundImage: `url(${montainImage})` }}
    >
      <div>
        <h2>{montain.title}</h2>
        <h3>{montain.subtitle}</h3>
        <p>{montain.summary}</p>
        <h6>
          {montain.name} - <small>{montain.birthday.split("T")[0]}</small>
        </h6>
      </div>
    </article>
  );
}
/** One piece of Puzzle, don't forget to uncomment line 1 */
MontainCard.propTypes = {
  montain: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  }).isRequired,
};
export default MontainCard;
