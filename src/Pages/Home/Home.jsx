import Banner from "../banner/Banner";
import CreditCard from "../CreditCard/CreditCard";
import LogoSection from "../LogoSection/LogoSection";
import MobileBanking from "../MobileBanking/MobileBanking";
import PaymentService from "../PaymentService/PaymentService";
import Review from "../Review/Review";
import SecureTransaction from "../SecureTransection/SecureTransaction";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PaymentService></PaymentService>
            <div className="hidden lg:block p-20">
            <LogoSection></LogoSection>
            </div>
            <CreditCard></CreditCard>
            <MobileBanking></MobileBanking>
            <SecureTransaction></SecureTransaction>
            <Review></Review>
        </div>
    );
};

export default Home;