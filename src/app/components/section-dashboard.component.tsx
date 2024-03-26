import Image from "next/image";
import AddSquareIconSvg from "@/../assets/icons/add-square-icon.svg";

interface IItem {
 icon: string;
 name: string;
}

interface ISectionDashboardComponentProps {
 items: IItem[],
}

const SectionDashboardComponent = ({ items }: ISectionDashboardComponentProps) =>
 <ul className="p-2 flex flex-col gap-5 flex-1">
  {
   items.map((item, index) => <li key={index}>
    <a href="#" className="flex flex-col justify-center items-center gap-1">
     <Image src={item.icon} alt="Add Square Icon" className="w-8 h-8" />
     <p className="text-slate-300 text-center text-xs">{item.name}</p>
    </a>
   </li>)
  }
 </ul>;
export default SectionDashboardComponent;