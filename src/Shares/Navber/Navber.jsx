import Container from "../Container/Container";
import img from "../../assets/image/Logo.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
const Navber = () => {

  const [open,setOpen]=useState(false)

  const menu = (
    <>
      <li>
        <a>product</a>
      </li>
      <li>
        <a>Developers</a>
      </li>
      <li>
        <a>Company</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
    </>
  );

  return (
    <div className="">
      <Container>
        <div className="navbar">
          <div className="navbar-start flex  flex-row-reverse lg:flex-row items-center lg:items-start justify-between w-full">
            <div className="dropdown dropdown-end lg:hidden">
              <div onClick={()=> setOpen(!open)} tabIndex={0} role="button" className="btn m-1">
                <FiMenu></FiMenu>
              </div>
              {
                open && <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {menu}
              </ul>
              }
            </div>
            <img src={img} width="150" height="150" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{menu}</ul>
          </div>
          <div className="navbar-end hidden lg:block">
            <ul className="menu menu-horizontal px-1 text-white">
              <li>
                <a>Support</a>
              </li>
            </ul>
            <a className="btn btn-md rounded-full bg-yellow-400  px-10">
              Sign in
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
