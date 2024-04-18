import Skills from "./Skills";
const About = () => {
  return (
    <div className="text-[#c4c4c4] bg-black w-full h-[100vh] text-lg flex flex-col gap-14">
      <div className="h-[25vh]  px-14 py-7">
        <h2 className="font-semibold pb-6 text-4xl">About</h2>
        <p>
          As a passionate front-end developer with a strong focus on crafting
          captivating user interfaces With expertise in React.js and Tailwind
          CSS, I specialize in building intuitive and seamless web experiences
          that delight users. As a remote worker, I value the flexibility and
          autonomy that comes with the role, allowing me to channel my
          creativity and drive into delivering exceptional results, no matter
          where I am.
        </p>
      </div>
      <div className="w-full">
        <Skills />
      </div>
    </div>
  );
}

export default About
