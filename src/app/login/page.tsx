import GoogleSignInButton from "./components/google-sign-in.component";

const LoginPage: React.FC = () => (<>
 <main className="h-full w-full grid grid-cols-6">
  <section className="max-h-screen h-full col-span-6 md:col-span-3 lg:col-span-4 bg-red-500">
   <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg" alt="Landscape Image" className="object-center object-cover h-full w-full" />
  </section>

  <section className="h-screen col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center p-20">
   <form action="" className="flex flex-col gap-5 w-full">
    <h1 className="my-4 text-7xl font-semibold text-center">PAGE NAME</h1>

    <div className="flex flex-col gap-2">
     <label htmlFor="username-email" className="text-gray-500">Username or email</label>
     <input type="text" name="username-email" id="username-email" className="p-3 outline-none rounded-md border-gray-500 border-[1.2px]" />
    </div>

    <div className="flex flex-col gap-2">
     <label htmlFor="password" className="text-gray-500">Password</label>
     <input type="text" name="password" id="password" className="p-3 outline-none rounded-md border-gray-500 border-[1.2px]" />
    </div>
    <p className="text-end underline text-green-600 font-medium"><a href="#">Forgot Password</a></p>

    <input type="submit" className="mt-6 bg-gray-900 py-5 text-white rounded-md cursor-pointer" value="Sign In" />
   </form>

   <div className="w-full flex py-2 px-20 justify-center items-center my-16">
    <div className="bg-slate-200 rounded-md h-1 w-full"></div>
    <p className="mx-5 text-gray-500">or</p>
    <div className="bg-slate-200 rounded-md h-1 w-full"></div>
   </div>

   {/* Google Sign In */}
   <GoogleSignInButton />

   <div className="flex gap-2 my-10">
    <p className="text-gray-500">Are you new? <a href="#" className="underline text-green-600 font-medium">Create an Account</a></p>
   </div>

  </section>
 </main>
</>);


export default LoginPage;