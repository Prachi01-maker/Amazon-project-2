import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img 
            className="header__logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />

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
  );
}

export default Header
