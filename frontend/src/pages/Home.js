import React,{useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import ProductList from '../components/ProductList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Home.css"
import Product from '../components/Product'
import { listProducts } from '../actions/ProdcutActions'
import Footer from './Footer'; 

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    const productList = useSelector( state => state.productList);
    const {products} = productList;

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }  
            },
            {
                breakpoint: 900,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }  
            },
            {
                breakpoint: 680,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }  
            },
            
        ]
    }

    return (
        <div className="home-page-container">

            <div className="banner-container">

                <Slider {...settings}>

                    <div className="banners">
                      <img src="https://images.squarespace-cdn.com/content/v1/568bea5540667a54498bf784/1551355070455-Y8KN4MV4A9PCKTISDHSD/LUX-WEB-BANNER-STILL-LIFE-PRODUCT-PHOTOGRAPHY-1.jpg" alt="b1"/>
                    </div>
                    <div className="banners">
                      <img src="https://previews.123rf.com/images/ikopylov/ikopylov1905/ikopylov190500003/124529558-web-banner-herbal-summer-organic-cosmetic-products-with-natural-ingredients-and-lavender-vector-illu.jpg" alt="b2"/>
                    </div>
                    <div className="banners">
                        <img src="https://images.remotehub.com/ace0aaa09a7711eb8e999a0aaf11a20e/original_thumb/ce972803.jpg?version=1618112444" alt="b3"/>
                    </div>
                    <div className="banners">
                        <img src="https://images.remotehub.com/d42c62669a7711eb91397e038280fee0/original_thumb/ec1eb042.jpg?version=1618112516" alt="b4"/>
                    </div>

                </Slider>
            
            </div>
            
            <ProductList/>


            <div className="home-product-slider">

                <h2 className="sec-title">More Products</h2>

                <Slider {...settings2}>

                    {products && products.map((product)=>{
                            return(
                                <Product key={product._id} product={product} /> 
                            )
                        })
                    }

                </Slider>
            </div>

<Footer/>
        </div>
    )
}

export default Home
