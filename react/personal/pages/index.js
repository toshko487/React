import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Chip } from "@/components/Chip";
export default function Home() {
  return (
    <div>
      <Header />
      <div className=" px-4">
        <div className="flex justify-center mt-16">
          <img src="/images/pic.jpg" alt="profile" />
        </div>
        <div className=" mt-14">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-10">
            Hi, I’m Sagar 👋
          </h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Chip label={"About me"} />
      </div>
      <Footer />
    </div>
  );
}
