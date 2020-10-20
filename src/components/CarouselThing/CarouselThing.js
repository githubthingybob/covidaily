import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//images and materialUI
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../CarouselItem/CarouselItem';
import image1 from '../../Images/chronic.png'
import image2 from '../../Images/Map1.png';
import image3 from '../../Images/Map2.png'
import image4 from '../../Images/aircleaning.jpg';
import image5 from '../../Images/masknomask.jpg';
import image6 from '../../Images/spanishflu.jpeg';
import image7 from '../../Images/spanishflu2.jpg';
import image8 from '../../Images/newspapers1920s.jpg';
import image9 from '../../Images/publicclosings.jpg';


function CarouselThing(props) {

 let items = [
    {image: <img src={image1}/>},
    {image: <img src={image2}/>},
    {image: <img src={image3}/>},
    {image: <img src={image4}/>},
    {image: <img src={image5}/>},
    {image: <img src={image6}/>},
    {image: <img src={image7}/>},
    {image: <img src={image8}/>},
    {image: <img src={image9}/>}

]

  return (
    <Carousel>
        {items.map((item,i) =>
        <CarouselItem key={i} item={item}/>
        )}

    </Carousel>
  );
}

export default connect(mapStoreToProps)(CarouselThing);
