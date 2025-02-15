// import backgroundImage from "../assets/backgroundhome.png";
import Waves from "../components/Waves";
import BlurText from "../components/BlurText";

function Home() {
  return (
    <>
      <div className="w-full h-100 md:h-150 bg-gradient-to-t from-gray-50 to-gray-300">
        <Waves className="w-full h-100 md:h-150"></Waves>
        <div>
          <h1 className="text-8xl pt-30 dm-sans-bold text-red-500 drop-shadow-md flex justify-center ">
            <BlurText text="Welcome to Pokédex"></BlurText>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
