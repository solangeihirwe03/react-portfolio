import { Link } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
const Home = () => {
  return (
    <section className="bg-black text-[#c4c4c4] absolute">
      {/**========this is home page ==================*/}

      <div className="bg-[url('http://localhost:5173/IMG_20231028_124803_960~2.jpg')] bg-no-repeat bg-cover w-full h-[90vh] md:h-[100vh] bg-opacity-80 flex flex-col items-center justify-center gap-7">
        <p className="font-serif text-3xl md:text-5xl text-[#c4c4c4]">
          I'm{" "}
          <span className="text-4xl md:text-6xl text-[#FFBE40] font-bold">
            SOLANGE~D~Ihirwe{" "}
          </span>
          <br />
          <span>Front-end developer</span>
        </p>
        <Link
          to="/contact"
          className="text-2xl border-[#ffbe40] border-2 p-3 font-semibold rounded-[22px] text-[#ffbe40]"
        >
          Contact Me
        </Link>
      </div>

      {/**========this isAbout me page ==================*/}
      <div>
        <About />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>
    </section>
  );
}

export default Home
