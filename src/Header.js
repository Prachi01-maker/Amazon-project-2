import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

function Header() {
const [{ basket}, dispatch] = useStateValue();


  return (
    <div className='header'>
      <Link to='/'>
        <img 
            className="header__logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
        </Link>

        <div className="header__search">
            <input
             className="header__searchInput"
             type="text" />
             <SearchIcon
             className="header__searchIcon" />
        </div>

         <div className="header__nav">
          <Link to='/login'>
          <div className='header__option'>
               <span 
               className='header__optionLineOne'>Hello guest</span> 
               <span 
               className='header__optionLinetwo'>sign in</span> 
            </div>
            </Link>
            

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
          <Link to='/checkout'> 
          <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLinetwo header__basketCount">{basket?.length}</span>
              </div>
          </Link>
            



</div>
          
      
    </div>
  );
}

export default Header
