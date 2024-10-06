import React from "react";
import "./Checkout.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (


<div>

    
<div className='header'>
    <a href='./'> 
      <img 
            className="header__logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </a>
       
        <div className="header__search">
            <input
             className="header__searchInput"
             type="text" />
             <SearchIcon
             className="header__searchIcon" />
        </div>

         <div className="header__nav">
          <div className='header__option'>
               <span 
               className='header__optionLineOne'>Hello guest</span> 
               <span 
               className='header__optionLinetwo'>sign in</span> 
            </div>

            <div className='header__option'>
              <span 
               className='header__optionLineOne'>RETURNS</span> 
               <span 
               className='header__optionLinetwo'>& orders</span> 
            </div>

            <div className='header__option'>
              <span 
               className='header__optionLineOne'>YOUR</span> 
               <span 
               className='header__optionLinetwo'>PRIME</span> 
            </div>

            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLinetwo header__basketCount">0</span>
              </div>





          </div>  
      
    </div>



<div class name="Checkout">    
        <div style={{display:'flex'}}>
  <div >
  <img class name="Checkout__ad" style={{width:  '100%',height:'100%',marginBottom:'50px'}}  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""  />
         
  </div>
         <div> 
            <div className="Checkout__right">
            <Subtotal />
             </div>
          </div>

             </div>
</div>





    <div className="checkout">
      <div className="checkout__left">
        

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        {/* <Subtotal /> */}
      </div>
    </div>


    </div>
  );
}

export default Checkout;