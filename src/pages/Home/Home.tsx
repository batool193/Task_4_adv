import Deal from "../../components/Deal/Deal";
import Dream from "../../components/Dream/Dream";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import Work from "../../components/Work/Work";


const Home = () => {
  return (
    <div>
      <Hero/>
       <Work/>
      <Dream/>
      <Trending/>
      <Deal/>
    </div>
  );
}

export default Home;
