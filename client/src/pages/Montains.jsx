import { useLoaderData } from "react-router-dom";
import MontainCard from "../components/MontainCard";

function Montains() {
  /** One Piece of Puzzle, don't forget to uncomment line 1 and 2 */
  const montains = useLoaderData();
  return (
    <section className="container">
      {montains.map((montain) => (
        <MontainCard montain={montain} key={montain.id} />
      ))}
    </section>
  );
}

export default Montains;
