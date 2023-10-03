import logo from "../assets/assets/logo.svg"
import { NavLink} from "react-router-dom";

export default function () {
  return(
    <div class="absolute z-[5]  top-0 px-3 md:px-8 text-sm lg:text-lg font-bold py-4 flex items-center justify-between md:justify-around shadow-md bg-white w-full">
      <div className="flex gap-2"><img src={logo} alt=""/>
      <span>HelpMeOut</span>
      </div>
      <div className="flex text-md font-normal gap-6">
      <span>Features</span>
      <span>How it Works</span>
      </div>
      <NavLink to={'/register'}>Get Started</NavLink>
    </div>
    
    )
}