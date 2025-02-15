import backgroundImage from "../assets/backgroundhome.png";

function Home() {
  return (
    <>
      <div
        className="w-full h-100 md:h-150 bg-cover bg-start "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <h1 className="text-5xl pt-30 dm-sans-bold text-red-500 drop-shadow-md flex justify-center ">
            Find your pokemon!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
