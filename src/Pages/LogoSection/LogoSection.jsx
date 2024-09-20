import img1 from '../../assets/image/Vector.png'
import img2 from '../../assets/image/Vector(2).png'
import img3 from '../../assets/image/Vector(3).png'
import img4 from '../../assets/image/Vector4.png'
import img5 from '../../assets/image/tiktok-logo.png'
const LogoSection = () => {
    return (
        <div className='flex items-center justify-evenly p-20'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    );
};

export default LogoSection;