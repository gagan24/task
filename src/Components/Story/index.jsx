import { Carousel } from "@material-tailwind/react";

export function Story() {
  return (
    <div className="bg-[#112C41] flex justify-center items-center p-20  text-white">

      <Carousel className="h-[70vh] overflow-hidden">
        <div className="lg:flex justify-center items-center gap-20">
          <div>

            <img
              src="/assets/story.png"
              alt="image 1"
              className=" object-contain h-[500px] w-[500px]"
            />
          </div>
          <div className="lg:w-[40%] text-[14px] relative">
            <span className="absolute -top-12 -left-7 text-[60px] text-[#F36F2B]">{'"'}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
            </p>
            <div className="my-16">

              <p>
                Title
              </p>
              <p>
                Name
              </p>
            </div>
            <div>
              <p className="flex items-center gap-4" >
                <span>
                Read my story
                </span>
                <button style={{border: "1px solid #FFE1E1"}}  className=" rounded-full w-10 h-10" >{">"}</button>

              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center items-center gap-20">
          <div>

            <img
              src="/assets/story.png"
              alt="image 1"
              className=" object-contain h-[500px] w-[500px]"
            />
          </div>
          <div className="lg:w-[40%] text-[14px] relative">
            <span className="absolute -top-12 -left-7 text-[60px] text-[#F36F2B]">{'"'}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
            </p>
            <div className="my-16">

              <p>
                Title
              </p>
              <p>
                Name
              </p>
            </div>
            <div>
            <p className="flex items-center gap-4" >
                <span>
                Read my story
                </span>
                <button style={{border: "1px solid #FFE1E1"}}  className=" rounded-full w-10 h-10" >{">"}</button>

              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center items-center gap-20">
          <div>

            <img
              src="/assets/story.png"
              alt="image 1"
              className=" object-contain h-[500px] w-[500px]"
            />
          </div>
          <div className="lg:w-[40%] text-[14px] relative">
            <span className="absolute -top-12 -left-7 text-[60px] text-[#F36F2B]">{'"'}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
            </p>
            <div className="my-16">

              <p>
                Title
              </p>
              <p>
                Name
              </p>
            </div>
            <div>
            <p className="flex items-center gap-4" >
                <span>
                Read my story
                </span>
                <button style={{border: "1px solid #FFE1E1"}}  className=" rounded-full w-10 h-10" >{">"}</button>

              </p>

            </div>
          </div>
        </div>
      </Carousel>
    </div>

  );
}