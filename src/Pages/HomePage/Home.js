import React, { useEffect } from 'react';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import HomeHeroMedia from '../../Components/HomeHeroMedia/HomeHeroMedia';
import HomeCategorySlider from '../../Components/HomeCategorySlider/HomeCategorySlider';
import ExploreMore from '../../Components/ExploreMore/ExploreMore';
import Layout from '../../Layout/Layout';
import { getProducts } from '../../Redux/Actions/action';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.requestReducer.products);
    const productsLoading = useSelector(state => state.requestReducer.productsLoading);

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <Layout>
            <HomeSlider
                slider="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw61643835/S22/S22-AK/21SS-AK-InsetHero-BG.jpg"
                subtitle="[ak]® Spring Collection"
                title="Non-Stop Performance"
                description="For [ak], there is no off-season. Push your limits year-round with highly technical gear that outperforms in any terrain or condition."
                button="Explore[AK]"
                button_1="Shop Now"
                slider_1="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw687d44e0/S22/S22-Spring-New-Arrivals/21SS-Spring-NewArrivals-Mens-InsetHero-BG-2x.jpg?sw=1600&amp;sfrm=jpg&amp;q=100"
                subtitle_1="Fresh Gear"
                title_1="New Arrivals"
                description_1="Ditch the heavy layers and get ready for spring with breathable layers and waterproof gear."
                button_2="Shop Now"
            />
            <NewArrivals
                title="New Arrivals"
                products={products}
                productsLoading={productsLoading} />
            <HomeCategorySlider />
            <HomeHeroMedia
                title='Best-Selling Styles'
                description="Some of our best-selling styles are back in stock. Grab them before they're gone."
                button="SHOP NOW"
                backgroundImage="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw51e66515/FW21/W21-Back-In-Stock/21W-BackinStockHype-LargePromo.jpg" />
            <NewArrivals
                title="Best Sellers"
                products={products}
                productsLoading={productsLoading} />
            <ExploreMore bigTitle='Explore More' />
            <HomeHeroMedia
                title='Thanks Jake'
                description="Jake founded Burton Snowboards out of a Vermont barn in 1977 and dedicated the rest of his life to snowboarding."
                button="TAKE A MOMENT"
                backgroundImage="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwa850f36d/FW21/W21-Jake-Page/21W-JakePage-FullBleedHero-01-mobile-2x.jpg?sw=768&sfrm=jpg&q=100" />
        </Layout>
    )
}

export default Home
