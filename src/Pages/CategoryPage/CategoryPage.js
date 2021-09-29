import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/action';
import Layout from '../../Layout/Layout';
import ProductCards from '../../Components/ProductCards/ProductCards';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import { sliderData } from './_sliderData';
import HomeHeroMedia from '../../Components/HomeHeroMedia/HomeHeroMedia';

const CategoryPage = () => {

    let { category } = useParams();
    const allProducts = useSelector(state => state.requestReducer.products)
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [slider, setSlider] = useState({});

    /*sorting products*/
    const filteredProducts = () => {
        const result = allProducts.filter((pro) => {
            return (
                pro.categories
                    .toLocaleLowerCase()
                    .indexOf(category.toLocaleLowerCase()) !== -1
            );
        });
        setProducts(result);
    };

    /*categorize slider*/

    const filterSliderData = () => {
        const result = sliderData.filter((x) => {
            return (
                x.sliderName
                    .toLocaleLowerCase()
                    .indexOf(category.toLocaleLowerCase()) !== -1
            )
        });

        setSlider(result.pop())
    };

    useEffect(() => {
        dispatch(getProducts());
        filterSliderData();
        filteredProducts();
    }, [category])

    return (
        <>
            <Layout>
                <HomeSlider
                    slider_1={slider.slider_1}
                    subtitle_1={slider.subtitle_1}
                    title_1={slider.title_1}
                    description_1={slider.description_1}
                    button_2="Shop Now"
                    color="#fff"
                    background="#fff"
                    buttonColor="#000"
                />
                <ProductCards products={products} />
                <HomeHeroMedia
                    title={slider.heroTitle}
                    description={slider.heroDescription}
                    button={slider.heroButton}
                    backgroundImage={slider.heroImg}
                />
            </Layout>
        </>
    )
}

export default CategoryPage
