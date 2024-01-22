import { Bar } from "./icons/Bar";
import { BarMenu } from "./barMenu/barMenu";
import { Title } from "./Title";

export function MainMenu() {
  return (
    <>
      <div className="sm:hidden">
        <Bar />
      </div>
      <div className="hidden sm:flex">
        <Title />
      </div>
      <div>
        <div className="fixed "></div>
        <div>
          <BarMenu />
        </div>
      </div>
    </>
  );
}
