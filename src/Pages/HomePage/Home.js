import React from 'react';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import HomeHeroMedia from '../../Components/HomeHeroMedia/HomeHeroMedia';
import HomeCategorySlider from '../../Components/HomeCategorySlider/HomeCategorySlider';
import ExploreMore from '../../Components/ExploreMore/ExploreMore';
import Layout from '../Layout';

const Home = () => {
    return (
        <div>   
            <Layout/>
            <HomeSlider/>
            <NewArrivals title="New Arrivals"/>
            <HomeCategorySlider/>
            <HomeHeroMedia 
                title='Best-Selling Styles'
                description="Some of our best-selling styles are back in stock. Grab them before they're gone."
                button="SHOP NOW"
                backgroundImage="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw51e66515/FW21/W21-Back-In-Stock/21W-BackinStockHype-LargePromo.jpg"/>
            <NewArrivals title="Best Sellers"/> 
            <ExploreMore bigTitle='Explore More'/>
             <HomeHeroMedia 
                title='Thanks Jake'
                description="Jake founded Burton Snowboards out of a Vermont barn in 1977 and dedicated the rest of his life to snowboarding."
                button="TAKE A MOMENT"
                backgroundImage="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwa850f36d/FW21/W21-Jake-Page/21W-JakePage-FullBleedHero-01-mobile-2x.jpg?sw=768&sfrm=jpg&q=100"/> 
            <Layout/>
        </div>
    )
}

export default Home
