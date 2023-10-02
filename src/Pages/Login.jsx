
export default function Login() {

  return (
    <div className="relative min-h-[100vw] bg-white px-[2rem] py-8 ">
    <h1 className="top-5rem text-2xl mb-8 text-l-pri font-bold text-center md:text-start">HelpMeOut</h1>
    <div className="flex flex-col gap-4  md:w-[40%] mx-auto justify-center items-center">
      <h2 className="font-bold text-2xl  text-light text-center">Login or Signup </h2>
      <span className="font-light-text-center">vvvvvvvvvvvuoln xsrrtg hhhhhh ujjbdrt uuhv</span>
      <button className="text-center py-2 w-full border-2 border-black rounded-lg">Countinue with Google</button>
      <button className="text-center py-2 w-full border-2 border-black rounded-lg">Countinue with Facebook</button>
    </div>
    <div className="flex flex-col gap-6 mt-[2rem] md:w-[40%] mx-auto justify-center items-start">
      <label for="" class="font-semibold">Email</label>
      <input type="text" class="w-full p-3 border-2 border-black rounded-lg " placeholder="enter your email address"/>
      <label for="" class="font-semibold " placeholder="Enter your Password">Password</label>
      <input type="text" class="w-full p-3 border-black border-2 rounded-lg " I placeholder="Enter your Password"/>
      <button class="text-white p-3 bg-l-pri w-full">Sign Up</button>
      </div>
</div>
  );
}
