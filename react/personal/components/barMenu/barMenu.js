import { Logo } from "../icons/logo";
import { Close } from "../icons/close";

export function BarMenu() {
  return (
    <>
      <div className="border-2 border-red-600 flex justify-between p-4">
        <Logo />
        <div className="sm:hidden">
          <Close />
        </div>
      </div>
    </>
  );
}
