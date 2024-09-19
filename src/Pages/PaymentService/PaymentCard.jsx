/* eslint-disable react/prop-types */

const PaymentCard = ({title,icon:Icon, des}) => {
    return (
        <div className=" p-10 rounded-sm border-l-4 border-blue-500 shadow-2xl">
            <Icon className='text-xl'></Icon>
            <h1>{title} </h1>
            <p>{des} </p>
            
        </div>
    );
};

export default PaymentCard;