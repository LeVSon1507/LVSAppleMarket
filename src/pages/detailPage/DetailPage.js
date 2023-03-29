import React, { useState } from "react";
import { useParams } from "react-router-dom";


import { URL } from "../../URL";
import useFetch from "../../customHooks/useFetch";

import './DetailPage.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import DetailIntroduce from "../../components/DetailIntroduce/DetailIntroduce";
import ProductList from "../../components/ProductList/ProductList";
import { Loading } from "../../components/Loading/Loading";

function DetailPage() {
    const { id } = useParams();
    const { data, isLoading } = useFetch(URL);
    const [quantity, setQuantity] = useState(1);
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const addToCart = () => {

    }
    const dataProductDetail = data.filter(product => product._id.$oid === id)
    const dataRelated = data.filter(product => product?.category === dataProductDetail[0]?.category)

    return (
        isLoading ?
            <>
                {< Loading />}
            </> :
            <>
                <div className="shopPageContainer">
                    <div className="shopPageContent">
                        <NavBar />
                        {/* detail header */}
                        <DetailIntroduce
                            dataProductDetail={dataProductDetail}
                            handleDecrease={handleDecrease}
                            handleIncrease={handleIncrease}
                            addToCart={addToCart}
                            quantity={quantity}
                        />
                        {/* detail description */}
                        <button className="description">DESCRIPTION</button>
                        <p className="desTitle">PRODUCT DESCRIPTION</p>
                        <p className="longDesText">{(dataProductDetail[0]?.long_desc)}</p>

                        {/* footer detail */}
                        <p className="desTitle">RELATED PRODUCTS</p>
                        <div className="footerDetail">
                            <ProductList
                                dataRelated={dataRelated}
                                isShopPage={true}
                                category={dataProductDetail[0]?.category}
                            />
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
    );
}

export default DetailPage;
