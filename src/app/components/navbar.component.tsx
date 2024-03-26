import FacebookIconSvg from "@/../assets/icons/facebook-icon.svg";
import AddSquareIconSvg from "@/../assets/icons/add-square-icon.svg";

import DividerComponent from "./divider.component";
import Image from "next/image";
import SectionDashboardComponent from "./section-dashboard.component";

const NavbarComponent: React.FC = (props) => (
 <header className="h-screen w-24 p-2">
  <nav className="w-full h-full">
   <input type="checkbox" id="menu" name="menu" className="peer hidden" />
   <label htmlFor="menu" className="absolute z-50 w-8 h-8 bg-menu bg-center bg-cover peer-checked:bg-close transition-all md:hidden right-2"></label>

   <div className="-translate-x-full w-24 h-full bg-slate-900 rounded-md flex flex-col peer-checked:translate-x-0 transition-all md:translate-x-0">
    <div>
     <Image src={FacebookIconSvg} alt="Facebook Icon" className="p-2 h-min flex flex-col justify-end" />
    </div>

    <DividerComponent />
    <div className="flex-1 flex flex-col">
     <SectionDashboardComponent items={[{ name: 'Add Item', icon: AddSquareIconSvg }, { name: 'Remove Item', icon: AddSquareIconSvg }, { name: 'Update Item', icon: AddSquareIconSvg }]} />

     <DividerComponent />
     <SectionDashboardComponent items={[{ name: 'Add Item', icon: AddSquareIconSvg }]} />
    </div>

    <DividerComponent />
    <div className="p-2 h-min flex flex-col justify-end">
     <Image src={FacebookIconSvg} alt="Facebook Icon" />
    </div>
   </div>
  </nav>
 </header>
);

export default NavbarComponent;