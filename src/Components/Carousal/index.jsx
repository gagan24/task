import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <div className="lg:h-screen h-[100%] overflow-hidden">

    <Carousel className="h-full overflow-hidden">
      <div className="h-full ">
        <img
          src="/assets/banner2.png"
          alt="image 1"
          className=" w-full h-fit brightness-50 object-cover"
        />
        
        <div className="absolute left-20 lg:bottom-32 bottom:20 text-white" >
          <p>
            Home / Why work with us
          </p>
          <h2 className="text-[55px]">
            Headline #1
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="h-full ">
        <img
          src="/assets/banner2.png"
          alt="image 1"
          className=" w-full h-fit brightness-50 object-cover"
        />
        
        <div className="absolute left-20 lg:bottom-32 bottom:20 text-white" >
          <p>
            Home / Why work with us
          </p>
          <h2 className="text-[55px]">
            Headline #1
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="h-full ">
        <img
          src="/assets/banner2.png"
          alt="image 1"
          className=" w-full h-fit brightness-50 object-cover"
        />
        
        <div className="absolute left-20 lg:bottom-32 bottom:20 text-white" >
          <p>
            Home / Why work with us
          </p>
          <h2 className="text-[55px]">
            Headline #1
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </Carousel>
    </div>

  );
}