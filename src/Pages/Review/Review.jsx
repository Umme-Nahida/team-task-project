import img1 from "../../assets/image/ellipse1.png";
import img2 from "../../assets/image/Ellipse 2.png";
import img3 from "../../assets/image/Ellipse 3 (1).png";
import img4 from "../../assets/image/Ellipse 3 (2).png";
import img5 from "../../assets/image/Ellipse 3 (3).png";

const Review = () => {
  return (
    <div className="bg-gradient-to-r from-[#5C0E62] to-[#00B5D0] py-20 px-5 lg:py-72 relative" style={{clipPath: 'polygon(0 16%, 100% 0%, 100% 100%, 0% 100%)' }}>
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-x-10">
        {/* content */}
        <div className="space-y-3 lg:ml-20 w-full lg:w-2/5 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-white">
            What Our <span className="text-[#5C0E62]">Customer</span> <br /> Are
            saying
          </h1>
          <p className="w-full lg:w-96 text-white">
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            lacus a, interdum nulla sem adipiscing inw
          </p>
        </div>

        {/* img content */}
        <div className="mt-10 lg:mt-0 lg:w-3/5">
          <div className=" lg:w-96 text-center space-y-3">
            <img src={img1} className="mx-auto lg:-mt-24" alt="" />
            <p className="text-white">
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
              lacus a, interdum nulla sem adipiscing inw
            </p>
            <div>
              <h1 className="text-yellow-400 text-xl">Leo Maynus</h1>
              <p className="text-yellow-300">CEO at Softpanda</p>
            </div>
          </div>

          {/* another img added here */}
          <div className="hidden lg:block">
            <div className="absolute top-0 right-0 bg-[#E4D6EE] bg-opacity-25 w-96 h-[500px]" style={{clipPath:'polygon(100% 0%, 100% 50%, 100% 100%, 71% 79%, 61% 48%, 70% 18%)'}} >ho</div>
            <img src={img2} className="w-20 absolute top-10 right-24" alt="" />
            <img src={img3} className="w-20 absolute top-44 right-28" alt="" />
            <img src={img5} className="w-20 absolute top-80 right-16" alt="" />
            <img
              src={img4}
              className="w-20 absolute bottom-44 left-2/3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
