import { Logo } from "./icons/logo";
import { MainMenu } from "./MainMenu";
import { Mode } from "./icons/mode";

export function Header() {
  return (
    <div className="flex justify-between">
      <Logo />
      <div className="flex">
        <MainMenu />
        <div className="hidden md:flex items-center gap-3">
          <Mode />
          <a
            href="cv.jpg"
            className="px-4 py-2 text-white bg-black rounded hover:bg-slate-500"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
