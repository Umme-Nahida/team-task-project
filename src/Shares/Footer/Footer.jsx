import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from "../../assets/image/Logo.png";
import Blinqpay from "../../Pages/Blinqpay/Blinqpay";
const Footer = () => {
  return (
    <div className="relative" >
      <Blinqpay></Blinqpay>
      <div className="bg-[#210933] py-20 lg:py-32 ">
        <footer className="footer text-slate-300 p-10">
          <aside className="space-y-4 mx-auto lg:mx-0">
            <img src={logo} alt="" />
            <div className="hidden lg:flex items-center gap-x-5 text-4xl">
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
            </div>
            <p className="hidden lg:block">
              Copy Right 2021..
              <br />
              All rights reserved
            </p>
          </aside>
          <nav className=" w-full flex justify-center lg:justify-start">
            <div className="flex flex-col space-y-3 items-center lg:items-start">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Development</a>
              <a className="link link-hover"> Marketing</a>
              <a className="link link-hover">Digital Marketing</a>
              <a className="link link-hover">Product Design</a>
            </div>
          </nav>
          <nav className=" w-full flex justify-center lg:justify-start">
            <div className="flex flex-col space-y-3 items-center lg:items-start">
              <h6 className="footer-title">Product</h6>
              <a className="link link-hover">Hotel Marnagement</a>
              <a className="link link-hover">Micro-Finance</a>
              <a className="link link-hover">Industry</a>
              <a className="link link-hover">Dhoko</a>
            </div>
          </nav>
          <nav className=" w-full flex justify-center lg:justify-start">
            <div className="flex flex-col space-y-3 items-center lg:items-start">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">Las Vegas</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Tokyo</a>
              <a className="link link-hover">Paris</a>
            </div>
          </nav>
          <div className="lg:hidden mx-auto">
            <div className="flex items-center mx-auto gap-x-5 text-4xl">
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
            </div>
            <p className="text-center">Copy Right 2021.. All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
