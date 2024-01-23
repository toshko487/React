import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Chip } from "@/components/Chip";
import { HighLight } from "@/components/Highligh/highlight";
import { About } from "@/components/About me/about me";

export default function Home() {
  return (
    <div className="max-w-screen-2xl m-auto p-4">
      <div>
        <Header />
      </div>
      <div className="py-24">
        <HighLight />
      </div>
      <div className=" bg-gray-50 py-24 flex flex-col gap-10">
        <div className="flex justify-center">
          <Chip label={"About me"} />
        </div>
        <About />
      </div>
      <Footer />
    </div>
  );
}
