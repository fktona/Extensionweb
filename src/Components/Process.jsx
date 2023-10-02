 import work from "../assets/assets/works.svg"


export default function Feature() {
  return (
    <div className="relative mt-[8rem]  items-center py-[10rem] flex row-reverse gap-8 justify-between p-6 flex-wrap bg-white">
      <div className="flex flex-col w-full py-4 bg-white gap-6 items-center justify-center">
        <p className="text-center font-bold text-2xl">How it Works</p>
        <span className="text-center text-md font-light">Key Highlights of Our Extension</span>
      </div>
      <div className="flex justify-between  gap-4">
      <div className="flex justify-between lq gap-4">
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
                      <img src="" alt="" />
            <p className="text-xl font-semibold">Simple Screen Recording</p>
            <span className="text-center font-light">Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to</span>
                        <img src={work} alt="" />
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
            <img src="" alt="" />
            <p className="text-xl font-semibold">Easy-to-Share Url</p>
            <span className="text-center font-light">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</span>
                        <img src={work} alt="" />
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
            <img src="" alt="" />
            <p className="text-xl font-semibold">Revisit Recordings</p>
            <span className="text-center font-light">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</span
            >
                        <img src={work} alt="" />
          </li>
        </ul>
      </div>

      </div>
    </div>
  );
}
