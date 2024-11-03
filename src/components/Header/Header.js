import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaBars } from 'react-icons/fa'
import LoginModal from '../Modal/LoginModal';
import SignUpModal from '../Modal/SignUpModal';
import { useNavbarContext } from '../../context/navbar_context';
import { useCartContext } from '../../context/cart_context';

function Header() {
  const { openSidebar, isLoginModalOpen, isSignUpModalOpen, Login, SignUp } = useNavbarContext();
  const { total_items } = useCartContext();

  return (
    <div className='header' id='header-section'>
      {isLoginModalOpen && <LoginModal />}
      {isSignUpModalOpen && <SignUpModal />}
      <div className="header-container">
        <div className="header-logo-wrapper">
          <Link to='/'>
            <h2 className="logo">
              <span style={{ color: "black", '--i': 1 }}>Meal</span><span style={{ color: "rgb(242, 159, 5)" }}>Mate</span>
            </h2>

          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="header-menu">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li style={{ paddingRight: "0" }}>
              <Link to='/meals'>Meals</Link>
            </li>
          </ul>
        </div>
        <div className="header-cart-btns">
          <ul style={{ marginRight: "20px" }}>
            <li style={{ paddingTop: "14px" }}>
              <Link to='/cart' className='header-cart-icon'> <FaShoppingCart />
                <span className='header-cart-value'>{total_items}</span></Link>
            </li>
            <li>
              <button className='login-btn' onClick={Login}>Login</button>
            </li>
            <li style={{ paddingRight: "0" }}>
              <button className='signUp-btn' onClick={SignUp}>Sign Up</button>
            </li>
          </ul>

        </div>
      </div>

      <hr style={{ width: "100vw" }} />
    </div >
  )
}

export default Header