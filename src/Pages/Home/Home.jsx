import Banner from "../banner/Banner";
import LogoSection from "../LogoSection/LogoSection";
import PaymentService from "../PaymentService/PaymentService";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PaymentService></PaymentService>
            <LogoSection></LogoSection>
        </div>
    );
};

export default Home;