import React from 'react';

const Pay = () => {

    React.useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 100,
          behavior: "smooth",
        });
      }, []);
    return (
        
        <div className="my-5 pt-5 mb-5 product-bg">
        <div className="container pb-4">
          <div>
            <h2 className="text-info text-start py-4">
              <i className="fas fa-cog me-2 text-info"></i>My Pay
            </h2>
          </div>
          <h1 style={{color: "red", top:"200px"}}>This Page is Comming Soon</h1>
        </div>
      </div>
    );
};

export default Pay;