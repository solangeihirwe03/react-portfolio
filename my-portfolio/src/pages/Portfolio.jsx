
const Portfolio = () => {
  return (
    <div className="bg-black text-[#c4c4c4] py-5 flex flex-col gap-7 items-center">
      <h2 className="font-semibold text-4xl text-center pb-6">Portfolio</h2>
      <div className="w-full flex flex-wrap  items-center justify-center gap-4 md:gap-7 md:px-[10%]">
        <div className="w-[30%]">
          <img
            src="./my-brand.png"
            alt="my-brand"
            className="w-full h-[20vh] md:h-[30vh] inset-0 transition duration-500 hover:brightness-50"
          />
        </div>
        <div className="w-[30%]">
          <img
            src="./tailwind-port.png"
            alt="Tailwind-portfolio"
            className="w-full h-[20vh] md:h-[30vh] inset-0 transition duration-500 hover:brightness-50"
          />
        </div>

        <div className="w-[30%]">
          <img
            src="./rock-paper.png"
            alt="rock-paper"
            className="w-full h-[20vh] md:h-[30vh] inset-0 transition duration-500 hover:brightness-50"
          />
        </div>

        <div className="w-[30%]">
          <img
            src="./Random-emoji.png"
            alt="random emoji"
            className="w-full h-[20vh] md:h-[30vh] inset-0 transition duration-500 hover:brightness-50"
          />
        </div>

        <div className="w-[30%]">
          <img
            src="./dice-rolle.png"
            alt="dice roller"
            className="w-full h-[20vh] md:h-[30vh] inset-0 transition duration-500 hover:brightness-50"
          />
        </div>

        <div className="w-[30%] hover:bg-[#ffbe40]">
          <img
            src="./age-calculator.png"
            alt="age calculator"
            className="w-full h-[20vh] md:h-[30vh] inset-0 transition duration-500 hover:brightness-50"
          />
        </div>
      </div>
      <button className=" bg-[#ffbe40] mt-7 px-8 py-2 rounded-[12px] font-semibold text-xl text-[black] hover:brightness-50">
        View more
      </button>
    </div>
  );
}

export default Portfolio
