import { Homeone } from "../components";
import { DataFour, DataOne, DataThree, DataTwo } from "./data";

const HomePage = () => {
  return (
    <>
      <Homeone {...DataOne} />
      <Homeone {...DataTwo} />
      <Homeone {...DataThree} />
      <Homeone {...DataFour} />
    </>
  );
};
export default HomePage;
