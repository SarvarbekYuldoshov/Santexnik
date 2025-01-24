import React from 'react'
import "./Header.css"
import Rasm_1 from "../images/rasm1.webp"
import { Button } from 'antd'

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header-container'>
               <ul className='header-list'>
                    <li className='header-item'>
                        <img className='header-img' src={Rasm_1} alt="" />
                    </li>
                    <li className='header-item'>
                        <a className='header-link' href="">BIZDA HAMMASi</a>
                    </li>
                    <li className='header-item'>
                        <a className='header-link' href="">ASAOSIY</a>
                    </li>
                    <li className='header-item'>
                        <a className='header-link' href="">ISHLARIMIZ</a>
                    </li>
                    <li className='header-item'>
                        <a className='header-link' href="">NIMA QILA OLAMIZ</a>
                    </li>
                    <li className='header-item'>
                         <Button>Buyurtma berish</Button>
                    </li>
               </ul>
            </div>
        </div>
    </>
  )
}

export default Header