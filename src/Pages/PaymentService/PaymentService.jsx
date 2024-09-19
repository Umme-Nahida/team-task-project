import { services } from "./payment";
import PaymentCard from "./PaymentCard";

const PaymentService = () => {
    return (
        <div>
            {/* payment service card */}
            <div className="md:w-1/2 grid grid-cols-2 gap-5 ">
                {services.map(item=>(
                    <PaymentCard key={item.label} title={item.label} icon={item.icon} des={item.description}></PaymentCard>
                ))}
            </div>

            {/* payment services text */}
            <div className="md:w-1/2 bg-red-500">

            </div>

        </div>
    );
};

export default PaymentService;