import React from 'react';
import pricing from '../../styles/Pricing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCheckmarkSharp } from "react-icons/io5";
import CommonSection from "../UI/CommonSection";

function Price() {
  return (
    
   
    <div>
      <CommonSection title="Pricing" />
      <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        {/* <div class="section-title">
        
          <p>Halkaan waxaad ka ogaan kartaa qiimayaasha aan uga talo galnay dhammaan cargo adeegyadiisa iyo qiimaha ugu macquulsan</p>
        </div> */}

        <div class="row">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="box">
              <h3>Fuel Gas</h3>
              <h4><sup>$</sup>1.20<span>per ltr</span></h4>
              <ul>
                <li><IoCheckmarkSharp/>  High Quality Petrol</li>
                <li><IoCheckmarkSharp/>  You will be served quickly</li>
                <li><IoCheckmarkSharp/>   High Quality Staff</li>
                
              </ul>
              <a href="#" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="box ">
              <h3>Washing Car</h3>
              <h4><sup>$</sup>50<span>per car</span></h4>
              <ul>
              <li><IoCheckmarkSharp/>  Beautifully Washing Your Car</li>
                <li><IoCheckmarkSharp/>   Reasonable Price</li>
                <li><IoCheckmarkSharp/>   Excellent Service</li>
                
              </ul>
              <a href="#" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div class="box">
              <h3>Oil Change</h3>
              <h4><sup>$</sup>10<span>per Car & Moto</span></h4>
              <ul>
              <li><IoCheckmarkSharp/>  High Quality Oil</li>
                <li><IoCheckmarkSharp/>  Many Kinds Oil</li>
                <li><IoCheckmarkSharp/>  Beautifuly Changed</li>
                
              </ul>
              <a href="#" class="buy-btn">Get Started</a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Price
