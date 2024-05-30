import React from 'react'
const Footer = () => {
  return (
    <footer className='page-footer'>
      <p>版權所有 &copy; {new Date().getFullYear()}</p>
      <span> 愛吃麵包 </span>
      <p> All Rights Reserved</p>
    </footer>
  )
}

export default Footer
