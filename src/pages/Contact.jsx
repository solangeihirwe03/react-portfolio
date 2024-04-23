import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full bg-[#281e0a] py-3">
      <div className="w-full flex items-center gap-9 justify-center font-semibold">
        <hr className="w-[32%] border-[1.5px] border-[#ffbe40]" />
        <h2 className="[w-30%] text-xl">Contact Me</h2>
        <hr className="w-[32%] border-[1.5px] border-[#ffbe40]" />
      </div>
      <div className="flex items-center justify-evenly w-full">
        <div className="flex flex-col gap-8 font-semibold">
          <p className="flex gap-3 text-xl">
            <CgMail className="text-3xl" />
            <span className="text-[#ffbe40]">solangeihirwe@gmail.com</span>
          </p>

          <p className="flex gap-3 text-xl">
            <IoCallOutline className="text-3xl" />
            <span className="text-[#ffbe40]">+250 787113254</span>
          </p>
          <p className="flex gap-3 text-xl">
            <GoLocation className="text-3xl" />
            <span className="text-[#ffbe40]">Kigali/Rwanda</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 py-5 text-black">
          <input
            type="text"
            value=""
            placeholder="enter name"
            className="h-12 px-8 rounded-[12px] text-xl"
          />
          <input
            type="email"
            value=""
            placeholder="enter email"
            className="h-12 px-8 rounded-[12px] text-xl"
          />
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="10"
            placeholder="enter message"
            className="rounded-[22px] h-36 px-8 pt-3 text-xl"
          ></textarea>
          <button className="bg-[#ffbe40] text-black h-10 rounded-[12px] text-xl font-semibold hover:brightness-50">
            Send message
          </button>
        </div>
      </div>
      <div className="w-full flex items-center gap-9 justify-center font-semibold">
        <hr className="w-[33%] border-[1.5px] border-[#ffbe40]" />
        <div className="text-[#fff] flex gap-5">
          <CgFacebook className="text-2xl" />
          <BsInstagram className="text-2xl" />
          <AiOutlineTwitter className="text-2xl" />
          <BiLogoLinkedin className="text-2xl" />
        </div>
        <hr className="w-[33%] border-[1.5px] border-[#ffbe40]" />
      </div>
    </div>
  );
};

export default Contact;
