const Skills = () => {
  return (
    <div className=" w-full h-[60vh]">
      <h2 className="font-semibold text-4xl text-center pb-6">
        My Skills
      </h2>
      <div className="w-full  px-[5%] md:px-[10%] flex flex-wrap items-center justify-center gap-4">
        <div className="w-[23%] flex flex-col items-center bg-[#565656] rounded-[22px] px-4 hover:bg-[#b5882e] transition-transform hover:translate-x-[5%] duration-700 text-white">
          <img src="./html.svg" alt="html" className="w-full p-4 md:w-[70%]" />
          <span className="font-bold">HTML</span>
        </div>
        <div className="w-[23%] flex flex-col items-center bg-[#565656] rounded-[22px] px-4 hover:bg-[#b5882e] transition-transform hover:translate-x-[5%] duration-700 text-white">
          <img src="./css.svg" alt="css" className="w-full md:w-[70%] p-4" />
          <span className="font-semibold">css</span>
        </div>
        <div className="w-[23%] flex flex-col items-center bg-[#565656] rounded-[22px] px-4 hover:bg-[#b5882e] transition-transform hover:translate-x-[5%] duration-700 text-white">
          <img
            src="./javascript.svg"
            alt="JavaScript"
            className="w-full md:w-[70%] p-4"
          />
          <span className="font-semibold">JavaScript</span>
        </div>

        <div className="w-[23%] flex flex-col items-center bg-[#565656] rounded-[22px] px-4 hover:bg-[#b5882e] transition-transform hover:translate-x-[5%] duration-700 text-white">
          <img
            src="./react.svg"
            alt="react js"
            className="w-full p-4 md:w-[70%]"
          />
          <span className="font-semibold">Reactjs</span>
        </div>

        <div className="w-[23%] flex flex-col items-center bg-[#565656] rounded-[22px] px-4 hover:bg-[#b5882e] transition-transform hover:translate-x-[5%] duration-700 text-white">
          <img
            src="./node.svg"
            alt="node js"
            className="w-full p-4 md:w-[70%]"
          />
          <span className="font-semibold">Nodejs</span>
        </div>

        <div className="w-[23%] flex flex-col items-center bg-[#565656] rounded-[22px] px-4 hover:bg-[#b5882e] transition-transform hover:translate-x-[5%] duration-700 text-white">
          <img
            src="./mongodb.svg"
            alt="mongodb"
            className="w-full p-4 md:w-[70%]"
          />
          <span className="font-semibold">Mongodb</span>
        </div>

        <div className="w-[23%] flex flex-col items-center bg-[#565656] rounded-[22px] px-4 hover:bg-[#b5882e] transition-transform hover:translate-x-[5%] duration-700 text-white">
          <img
            src="./typescript.svg"
            alt="typescript"
            className="w-full p-4 md:w-[70%]"
          />
          <span className="font-semibold">Typescript</span>
        </div>
      </div>
    </div>
  );
}

export default Skills
