import React from "react";
import "./Home.css";
import banner from "./images/img1.jpg";
import Product from "./Product";

export default function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__banner' src={banner} alt='banner' />
        <div className='home__row'>
          <Product
            title='Samsung 860 EVO 250GB SATA 2.5 Internal Solid State Drive (SSD) (MZ-76E250)'
            image='https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._SL1500_.jpg'
            price={3750}
            rating={4}
          />
          <Product
            title='ONCRO® Black 3.0A 3 in 1 Cable Nylon Duo Jean Braided Fast, Rapid, Super Charging Cable for Micro USB, iPhone & Type C Devices. 3.3 ft 3in1 Charging Cable car Multi Charger Cable'
            image='https://images-na.ssl-images-amazon.com/images/I/81Fci3g5JvL._SX466_.jpg'
            price={200}
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            title='Optimum Nutrition (ON) Serious Mass High Protein and High Calorie Mass Gainer / Weight Gainer Powder - 6 lbs, 2.72 kg (Chocolate) with Vitamins and Minerals
Visit the OPTIMUM NUTRITION Store'
            image='https://images-na.ssl-images-amazon.com/images/I/61utsyBIvWL._SX450_.jpg'
            price={2599}
            rating={3}
          />
          <Product
            title='Jaypee plus Ace Shaker with Blending Ball, 700 ML, Grey Blue'
            image='https://images-na.ssl-images-amazon.com/images/I/31oKKV4-%2BEL._SX425_.jpg'
            price={170}
            rating={4}
          />
          <Product
            title='Spacecrafts Work from Home Folding Computer Table for Laptop Study Office Desk (Brown)'
            image='https://images-na.ssl-images-amazon.com/images/I/71HgzzjLDuL._SL1500_.jpg'
            price={1999}
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)'
            image='https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._SL1500_.jpg'
            price={15499}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
