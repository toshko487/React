import { Bar } from "./icons/Bar";
import { BarMenu } from "./barMenu/barMenu";
import { Title } from "./Title";
import { useState } from "react";
import { Logo } from "./icons/Logo";
import { Close } from "./icons/close";

export function MainMenu() {
  return (
    <>
      <div className="hidden md:flex items-center">
        <Title />
      </div>
      <MobileMenu />
    </>
  );
}

function MobileMenu() {
  const [visible, setVisible] = useState(false);
  function openMenu() {
    setVisible(true);
  }
  function closeMenu() {
    setVisible(false);
  }

  return (
    <>
      <div className="md:hidden" onClick={openMenu}>
        <Bar />
      </div>
      {visible && (
        <div className="fixed inset-0 bg-gray-100" onClick={closeMenu}></div>
      )}
      <div
        className={`fixed top-0  bottom-0 w-5/6 bg-white transition-all ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div className="border-2 border-red-600 flex justify-between p-4">
          <Logo />
          <div className="" onClick={closeMenu}>
            <Close />
          </div>
        </div>
        <BarMenu />
      </div>
    </>
  );
}
