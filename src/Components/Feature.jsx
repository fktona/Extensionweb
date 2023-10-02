import img from "../assets/assets/feature_img.svg"
import kite from "../assets/assets/circle.svg"
import share from "../assets/assets/share.svg"
import revisit from "../assets/assets/revisit.svg"

export default function Feature() {
  return (
    <div className="relative mt-[8rem] items-center py-[10rem]  flex  gap-8 justify-between p-6 flex-wrap bg-white">
      <div className="flex flex-col w-full py-4 bg-white gap-6 items-center justify-center">
        <p className="text-center font-bold text-2xl">Features</p>
        <span className="text-center text-md font-light">Key Highlights of Our Extension</span>
      </div>
      <div className="flex justify-between md:flex-row  flex-col  gap-4">
      <div className="flex justify-between flex-col gap-8">
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
            <img src={kite} alt="" />
            <p className="text-xl font-semibold">Simple Screen Recording</p>
            <span className="text-center font-light">Effortless screen recording for everyone. Record with ease, no tech expertise required</span>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
            <img src={share} alt="" />
            <p className="text-xl font-semibold">Easy-to-Share Url</p>
            <span className="text-center font-light">Access and review your past content effortlessly. Your recordings, always at your fingertips</span>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
            <img src={revisit} alt="" />
            <p className="text-xl font-semibold">Revisit Recordings</p>
            <span className="text-center font-light">Access and review your past content effortlessly. Your recordings, always at your fingertips</span>
          </li>
        </ul>
      </div>
        <img
          src={img}
          
          alt="" className="md:max-w-[40%] " />
      </div>
    </div>
  );
}
