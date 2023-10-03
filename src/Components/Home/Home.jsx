import React from 'react';
import './home.css';
import video from '../../Assets/video.mp4';
import {GoLocation} from 'react-icons/go';
import {AiFillFilter} from 'react-icons/ai';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaTripadvisor} from 'react-icons/fa';
import {BiListUl} from 'react-icons/bi';
import {TbAppsFilled} from 'react-icons/tb';

function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video  src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            OurPackages
          </span>
          <h1 className="homeTitle">
            Search your Holiday
          </h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination</label>
            <div className="input flex">
              <input type="text" placeholder='enter  name here' />
              <GoLocation className='icon'/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="city">select your date</label>
            <div className="input flex">
              <input type="date" placeholder='enter  name here' />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$50000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div> 

          <div className="searchOptions flex">
            <AiFillFilter />
            <span>More Filters</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <BiLogoFacebookCircle className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
          <BiListUl className="icon" />
          <TbAppsFilled className="icon" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home
