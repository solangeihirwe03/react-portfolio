const Skills = () => {
  return (
    <div className="">
      <h2 className="text-[#c4c4c4] font-semibold text-4xl text-center">My Skills</h2>
      <div className="w-full p-[10%] flex flex-wrap items-center justify-center ">
        <img src="./html.svg" alt="html" className="w-[25%] p-4" />
        <img src="./css.svg" alt="css" className="w-[25%] p-4" />
        <img src="./javascript.svg" alt="JavaScript" className="w-[25%] p-4" />
        <img src="./react.svg" alt="react js" className="w-[25%] p-4" />
        <img src="./node.svg" alt="node js" className="w-[25%] p-4" />
        <img src="./mongodb.svg" alt="mongodb" className="w-[25%] p-4" />
        <img src="./typescript.svg" alt="typescript" className="w-[25%] p-4" />
      </div>
    </div>
  );
}

export default Skills
