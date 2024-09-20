import Banner from "../banner/Banner";
import CreditCard from "../CreditCard/CreditCard";
import LogoSection from "../LogoSection/LogoSection";
import MobileBanking from "../MobileBanking/MobileBanking";
import PaymentService from "../PaymentService/PaymentService";
import SecureTransaction from "../SecureTransection/SecureTransaction";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PaymentService></PaymentService>
            <LogoSection></LogoSection>
            <CreditCard></CreditCard>
            <MobileBanking></MobileBanking>
            <SecureTransaction></SecureTransaction>
        </div>
    );
};

export default Home;