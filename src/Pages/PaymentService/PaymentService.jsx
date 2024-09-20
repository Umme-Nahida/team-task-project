import { FaArrowRightLong } from "react-icons/fa6";
import { services } from "./payment";
import PaymentCard from "./PaymentCard";

const PaymentService = () => {
  return (
    <div className="p-10 lg:mt-20 flex items-center justify-center gap-x-10">
      {/* payment service card */}
      <div className="hidden  md:w-1/2 lg:grid grid-cols-2 gap-5 ">
        {services.map((item) => (
          <PaymentCard
            key={item.label}
            title={item.label}
            icon={item.icon}
            des={item.description}
          ></PaymentCard>
        ))}
      </div>

      {/* payment services text */}
      <div className="md:w-1/2 flex items-center justify-center  ">
        <div className="w-[400px] space-y-3 lg:-mt-72">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#857885]">Make & Share <span className="text-[#5C0E62]">Payments</span> With Community</h1>
          <p className="">
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <button className="flex items-center gap-x-2 text-[#5C0E62] font-bold">Learn more <FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  );
};

export default PaymentService;
