import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full bg-gray-900 text-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Content */}
          <div className="text-center xl:text-left xl:order-none order-2">
            <span className="text-xl text-accent">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />
              <span className="text-accent">Yassine Jenhani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download CV Button */}
              <a
                href="/asset/CV_EN_YassineJenhani.pdf"
                download
                className="uppercase flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-full px-6 py-3 transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
              {/* Social Links */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Right Content (Photo) */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
