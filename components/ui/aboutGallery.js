import { GalleryCard } from "../card/galleryCard";
import { CustomSectionWrapper } from "../layout";

export const AboutGallerySection = () => {
  return (
    <section className="w-full px-12 py-12 ">
      <CustomSectionWrapper>
        <div className="grid gap-6 grid-cols-2">
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-medium  text-blue uppercase  font-mono  ">We Are </h1>
              <h1 className="text-5xl uppercase mt- font-bold text-blue">
                UBOGU <br /> Football Academy
              </h1>
            </div>
            <div>
              <p className="font-medium font-lato text-base my-1 text-[gray]">
                At Ubogu Football Academy, we believe that talent is just the beginning. Our mission
                is to{" "}
                <span className="text-yellow font-lato font-semibold">
                  unlock the potential of young African footballers
                </span>
                , equipping them with the skills, mindset, and opportunities to succeed on and off
                the pitch.
              </p>
              <p className="font-medium text-base my-1 text-[gray]">
                We are more than just a football academy—we are a{" "}
                <span className="text-yellow font-semibold">
                  community of dreamers, hard workers, and future champions
                </span>
                . Through world-class training, education, and character-building, we prepare our
                players to compete at the highest levels while becoming leaders and role models in
                their communities.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <button className="bg-blue text-white uppercase py-2 px-4 rounded text-sm font-medium">
                Learn More
              </button>
              <button className="bg-yellow text-white uppercase py-2 px-4 rounded text-sm font-medium">
                See Players
              </button>
            </div>
          </div>
          <div className="w-full h-[60vh] grid grid-cols-2 gap-3 rounded overflow-auto  p-4 bg-gray-100">
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
      </CustomSectionWrapper>
    </section>
  );
};
