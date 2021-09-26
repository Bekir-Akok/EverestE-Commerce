import  {useEffect} from 'react';
import Layout from '../Layout';
import { useSelector ,useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/action';

const CategoryPage = ({gender}) => {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.requestReducer.products)

     const productsFilter =  (gender) => {
        allProducts && allProducts.filter((products) => {
            return products.category = gender 
        })
    } 

        useEffect( () => {
            dispatch(getProducts())
            productsFilter()
        },[])

        console.log(productsFilter)

    return (
        <>
            <Layout>

            </Layout>
        </>
    )
}

export default CategoryPage
