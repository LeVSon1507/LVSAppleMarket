import React from "react";
import './ShopPage.css'


// internal
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ShopCategories from "../../components/ShopCategories/ShopCategories";


function ShopPage() {
    return (
        <div className="shopPageContainer">
            <div className="shopPageContent">
                <NavBar />
                <ShopCategories />
            </div>
            <Footer />
        </div>
    );
}

export default ShopPage;
