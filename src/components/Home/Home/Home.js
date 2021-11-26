import React, { useEffect } from 'react';
import ClientWords from '../../../Pages/ClientWords/ClientWords';
import TopBanner from '../ToBanner/TopBanner';
import aboutPhoto from "../../../images/about.jpg";
import All_products from '../All_products/All_products';

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    return (
        <div>
            <TopBanner />
            <All_products />
            <section>
                <div className="container p-5">
                    <h2 className="fw-bold py-2">ABOUT US</h2>
                    <div className="row align-items-center pt-3">
                    <div className="col-md-6">
                    <img src={aboutPhoto} alt="" className=" img-fluid rounded" />
                    </div>
                        <div className="col-md-6">
                            <p className="text-secondary text-start">
                                ShaverShop is the largest one-stop shopping destination in Bangladesh. Launched in 2016, the online store offers the widest range of products in categories ranging from electronics to household appliances, latest smart phones, Camera, Computing & accessories fashion, health equipment and makeup.
                            </p>
                            <p className="text-secondary text-start">
                                ShaverShop believes in “Delivering Happiness” with an excellent customer experience thus provides the most efficient delivery service through own logistics so that customers get a hassle-free product delivery at their doorstep. We help our local and international vendors as well as 200 brands serving thousands of consumers from all over Bangladesh. We also offer free returns and various payment methods including Cash on delivery, Online Payments, Card on delivery and bKash with all of our products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ClientWords />
        </div>
    );
};

export default Home;