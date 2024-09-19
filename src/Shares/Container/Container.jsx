/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            {children}
        </div>
    );
};

export default Container;