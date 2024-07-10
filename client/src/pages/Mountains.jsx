import { useLoaderData } from "react-router-dom";
import MountainCard from "../components/MountainCard";

function Montains() {
  /** One Piece of Puzzle, don't forget to uncomment line 1 and 2 */
  const mountains = useLoaderData();
  return (
    <section className="container">
      {mountains.map((mountain) => (
        <MountainCard mountain={mountain} key={mountain.id} />
      ))}
    </section>
  );
}

export default Montains;
