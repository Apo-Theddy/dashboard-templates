import GoogleIconSvg from "@/../assets/icons/google-icon.svg";
import Image from "next/image";

const GoogleSignInButton: React.FC = () => {
 return (
  <a href="#">
   <div className="flex gap-3 items-center">
    <Image src={GoogleIconSvg} alt="Google Icon Svg" className="w-6 h-6" />
    <p className="text-gray-500">Sign In with Google</p>
   </div>
  </a>
 );
};

export default GoogleSignInButton;