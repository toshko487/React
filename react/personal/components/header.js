import { Logo } from "./icons/logo";
import { MainMenu } from "./MainMenu";

export function Header() {
  return (
    <div className="border-2 border-red-600 flex justify-between p-4">
      <Logo />
      <div className="flex">
        <MainMenu />
        <a className="hidden sm:flex">Download</a>
      </div>
    </div>
  );
}
