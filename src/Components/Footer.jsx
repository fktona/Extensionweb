import logo from "../assets/assets/logo-white.svg"


export default function Feature() {
  return (
    <div className="relative  items-center py-[10rem]  flex gap-8 w-full justify-between p-6 flex-wrap bg-r-pri text-white ">
    
      <div className="flex md:flex-row flex-col items-center justify-between w-full gap-8 md:items-start md:py-6 flex-wrap ">
              <h4 className="text-xl flex  gap-4 justify-center items-center font-bold ">    <img src={logo} alt="" />HelpmMeOut</h4>
          <ul className="flex flex-col items-center gap-2 text-centerr">
          <h4 className="font-bold ">About</h4>
            <li className="font-semibold">Contact Us</li>
            <li className="font-semibold">Privacy Policy</li>
            <li className="font-semibold">cvggggg</li>
          </ul>
        
          <ul className="flex flex-col gap-2 items-center t3xt-centerter font-bold
          ">Menu
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Converter</li>
            <li className="font-semibold">How it Works</li>
          </ul>
        
          <ul className="flex flex-col items-center gap-2 t3xt-centerter font-bold">Screen Record
            <li className="font-semibold">Browser Window</li>
            <li className="font-semibold">Desktop</li>
            <li className="font-semibold">Application</li>
          </ul>
        
      </div>
    </div>
  );
}

//     id: 1,
//     title: "Menu",
//     links: [
//       { id: 1, linkName: "Home" },
//       { id: 2, linkName: "Converter" },
//       { id: 3, linkName: "How It Works" },
//     ],
//   },

//   {
//     id: 2,
//     title: "About us",
//     links: [
//       { id: 1, linkName: "About" },
//       { id: 2, linkName: "Contact Us" },
//       { id: 3, linkName: "Privacy Policy" },
//     ],
//   },

//   {
//     id: 3,
//     title: "Screen Record",
//     links: [
//       { id: 1, linkName: "Browser Window" },
//       { id: 2, linkName: "Desktop" },
//       { id: 3, linkName: "Application" },
//     ],
//   },
// ];
