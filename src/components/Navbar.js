import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/logo.png'
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='愛吃麵包' />
            <h3>愛吃麵包</h3>
          </Link>
          <button className='nav-btn' onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <Link
            to='/'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            首頁
          </Link>
          <Link
            to='/cakes'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            蛋糕
          </Link>
          <Link
            to='/breads'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            麵包
          </Link>

          <Link
            to='/dessert'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            甜點
          </Link>
          <Link
            to='/tags'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            分類查詢
          </Link>
          <div className='nav-link contact-link'>
            <Link
              to='/about'
              className='btn'
              // activeClassName='active-link'
              onClick={() => setShow(false)}
            >
              關於我們
            </Link>
          </div>
        </div>
      </div>
    </nav>
    // <nav>
    //   <FiAlignJustify />
    //   <ul>
    //     <li>
    //       <Link to='/'>首頁</Link>
    //     </li>
    //     <li>
    //       <Link to='/cakes'>精選蛋糕</Link>
    //     </li>
    //     <li>
    //       <Link to='/breads'>麵包糕點</Link>
    //     </li>
    //     <li>
    //       <Link to='/dessert'>甜點</Link>
    //     </li>
    //     <li>
    //       <Link to='/tags'>分類查詢</Link>
    //     </li>
    //     <li>
    //       <Link to='/about'>關於我們</Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}
export default Navbar
