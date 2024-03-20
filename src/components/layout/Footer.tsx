import { Linkedin } from "lucide-react";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-stone-700 py-12 p-4 md:px-24 text-white">
      <div className="flex justify-between items-start flex-col lg:flex-row gap-4 py-5">
        <div>
          <img src={logo} alt="Smart Health Care Logo" className="w-16" />
          <p className="md:max-w-[70ch] mt-8">
            Our post-disaster community health and medical supply chain platform
            aims to streamline and strengthen the distribution of vital
            healthcare resources in the aftermath of disasters, ensuring prompt
            and efficient delivery to affected communities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4>Services</h4>
            <div className="text-sm leading-loose">
              <ul>
                <li>Home Care</li>
                <li>Health Care</li>
                <li>Medical Care</li>
                <li>Food Supply</li>
                <li>House Building</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <div className="text-sm leading-loose">
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Our Team</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Address</h4>
            <div className="">
              <p className="leading-loose">Address: 90 Green London Road</p>
              <p className="leading-loose">Phone: 15654141516, 98554115795</p>
              <p className="leading-loose">Email Address: example@gmail.com</p>
              <div className="flex gap-2 py-3 ">
                <a href="#" className="rounded-full bg-blue-600 p-2">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 flex flex-col-reverse lg:flex-row items-center justify-around gap-4 border-t-2 border-slate-400">
        <p className="">Copyright © 2023 Smart Health - All right reserved</p>
        <ul className="flex gap-5 items-center text-sm">
          <li>
            <Link to="#">Terms of Use</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
