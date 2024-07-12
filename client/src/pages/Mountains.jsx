import { useLoaderData } from "react-router-dom";
import MountainCard from "../components/MountainCard";

function Montains() {
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
