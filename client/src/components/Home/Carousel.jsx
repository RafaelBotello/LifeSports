import React from "react";
import { Link } from 'react-router-dom';

import Pic1 from "../../Assets/Img/hornetslifehoops.jpg";
import Pic2 from "../../Assets/Img/lifekicksboys.jpg";
import Pic3 from "../../Assets/Img/lifehoopsgame.jpg";


function Carousel() {
  return(
      <div id="carouselFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
          <div className="carousel-item active">
              <img className="d-block w-100" src={Pic1} alt="Hornets takeover: LifeHoops" />
          </div>
          <div className="carousel-item">
              <img className="d-block w-100" src={Pic2} alt="Boys Life Kicks"/>
          </div>
          <div className="carousel-item">
          <img className="d-block w-100" src={Pic3} alt="Lifeh Hoops Game"/>
          </div>
      </div>
    <a className="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  )
}
export default Carousel;