import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Search from '../Search'
import Featured from '../Featured'
import CategorySearch from '../CategorySearch'
import Footer from '../Footer'
import Footer2 from '../Footer2'
import Carousel from '../Carousel'
// import FirstImage from '.../images/home-image-1.png';
// import SecondImage from '.../images/home-image-2.png';
// import ThirdImage from '.../images/home-image-3.png';

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

  const slides = [
    { image: 'https://rukminim2.flixcart.com/fk-p-image/850/250/cf-chitrakaar-prod/69969b740503051630904c28310b5c29.jpeg?q=90', caption: 'Slide 1' },
    { image: 'https://rukminim2.flixcart.com/fk-p-image/750/250/cf-chitrakaar-prod/88635e5f65680d3f4ecad13556ad13f9.jpeg?q=90', caption: 'Slide 2' },
    { image: 'https://rukminim2.flixcart.com/fk-p-image/750/250/cf-chitrakaar-prod/52794115d3852c74dbbfc62b574b3f61.jpeg?q=90', caption: 'Slide 3' },
    { image: 'https://rukminim2.flixcart.com/fk-p-image/850/250/cf-chitrakaar-prod/e5182f034949c85ce54f668248a98324.jpeg?q=90', caption: 'Slide 4' },
    { image: 'https://rukminim2.flixcart.com/fk-p-image/850/250/cf-chitrakaar-prod/e190bdd709e9a819c1ec1b98022185a1.jpeg?q=90', caption: 'Slide 5' },
    // { image: 'https://www.jumpplus.com/web/image/835564/MacBook_Pro_13_in_Web_Banner_1400x700__caEN_Simp.jpg?access_token=57c102a8-266b-4033-8aea-76072943955e', caption: 'Slide 6' },
    // { image: 'https://images.vexels.com/content/126443/preview/macbook-pro-touch-bar-banner-fedf81.png', caption: 'Slide 7' },
    // { image: 'https://cdn.tgdd.vn/Files/2021/10/19/1391493/cach-tai-hinh-nen-macbook-pro-14-inch-va-macbook-pro-16-inch_1280x720-800-resize.jpg', caption: 'Slide 8' },
    // { image: 'https://static.lenovo.com/cap/Slim-7-Carbon-landing/images/v2/banner01-bg.jpg', caption: 'Slide 9' },
    // { image: 'https://www.birdsofparadyes.com/cdn/shop/files/share_dd8f062e-90d6-4e20-b17e-90c33f91f47b.png?v=1618403300', caption: 'Slide 10' },
  ];

  return (
    <>
    <Navbar/>
    <Search/>
    <Carousel slides={slides} />
    <Featured/>
    <CategorySearch/>
    <Footer/>
    <Footer2/>
    </>
  )
}

export default Home