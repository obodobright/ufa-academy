import { CustomSectionWrapper } from "../layout";

export const Hero = () => {
  return (
    <section className="w-full bg-blue  relative py-5 overflow-hidden min-h-[50vh] md:min-h-screen flex items-center justify-center">
      <>
        <video
          loop
          autoPlay
          className="hidden md:block md:absolute blur-[2px] overflow-hidden  top-0 left-0 z-0"
        >
          <source
            type="video/mp4"
            src={`https://sportatix-video-s3.s3.eu-west-3.amazonaws.com/frontend-videos/pexels-cottonbro-studio-4440937-1920x1080-50fps.mp4`}
          />
          <source
            src="https://sportatix-video-s3.s3.eu-west-3.amazonaws.com/frontend-videos/pexels-tima-miroshnichenko-6084029-3840x2160-25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <CustomSectionWrapper>
          <div className="text-white px-3 flex items-center justify-center flex-col space-y-4 relative z-">
            <h3 className="text-3xl md:text-6xl  text-center text-white font-extrabold uppercase font-[Montserrat]">
              Welcome to UFA Academy
            </h3>
            <p className="font-medium text-sm md:text-lg mt-4 tracking-wide max-w-5xl text-center">
              At UBOGU Football Academy, our mission is to provide a world-class football
              development program that nurtures the technical, tactical, physical, and mental growth
              of young players. We are committed to creating a supportive and inclusive environment
              that fosters a love for the game, promotes sportsmanship, and develops the next
              generation of football leaders.
            </p>

            <button className="mx-auto border rounded-md py-2 px-3 md:px-6 text-sm md:text-lg font-medium">
              Join Us
            </button>
          </div>
        </CustomSectionWrapper>
      </>
    </section>
  );
};
