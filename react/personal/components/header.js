import { Logo } from "./icons/logo";
import { Bar } from "./icons/Bar";
import { MainMenu } from "./MainMenu";
import { menuItems } from "@/data/menuItems";

export function Header() {
  return (
    <div className="border-2 border-red-600 flex justify-between p-4">
      <Logo />
      <div className="sm:hidden">
        <Bar />
      </div>
      <div className="hidden sm:flex">
        <MainMenu items={menuItems} />
        <a>Download</a>
      </div>
    </div>
  );
}
