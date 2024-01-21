import { Logo } from "./icons/logo";
import { Bar } from "./icons/Bar";

export function Header() {
  return (
    <div className="border-2 border-red-600 flex justify-between p-4">
      <Logo />
      <div className="sm:hidden">
        <Bar />
      </div>
    </div>
  );
}
