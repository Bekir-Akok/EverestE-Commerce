import { useEffect ,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {getProducts} from '../../Redux/Actions/action';
import Layout from '../../Layout/Layout';
import ProductCards from '../../Components/ProductCards/ProductCards';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';

const CategoryPage = () => { 

    const {category} = useParams();
    const allProducts = useSelector(state => state.requestReducer.products)
    const dispatch = useDispatch();
    const [products , setProducts] = useState([]);
    const [loading , setLoading] =useState(false);

    const filteredProducts = () => {
           const result = allProducts.filter((pro) => {
            return (
                pro.categories
                .toLocaleLowerCase()
                .indexOf(category.toLocaleLowerCase()) !== -1
            );
          });
          setProducts(result);
          setLoading(true);
      };

    useEffect(() => {
        dispatch(getProducts());
        filteredProducts();
    },[category])

    return (
        <>
            <Layout>
                <HomeSlider/>
                {
                    loading ? <ProductCards products={products}/> : <h1>Yükleniyor...</h1>
                }
                
            </Layout>
        </>
    )
}

export default CategoryPage
