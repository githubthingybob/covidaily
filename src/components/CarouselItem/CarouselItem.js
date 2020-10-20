import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './CarouselItem.css'



function CarouselItem(props) {

  return (
    <div id="carousel-image">
        {props.item.image}
    </div>
  );
}

export default connect(mapStoreToProps)(CarouselItem);
