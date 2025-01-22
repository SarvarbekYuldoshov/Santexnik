import React from 'react'
import Rasm_1 from "../images/rasm1.webp"

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header-container'>
               <ul className='header-list'>
                    <li className='header-item'>
                        <a className='header-link' href="">Ishlarimiz</a>
                        <img className='header-img' src={Rasm_1} alt="" />
                        <a className='header-link' href="">Ishchilarimiz</a>
                    </li>
               </ul>
            </div>
        </div>
    </>
  )
}

export default Header