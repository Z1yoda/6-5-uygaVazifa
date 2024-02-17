import React from 'react'
import darkor from '../../assets/darkor-icon.svg'
import './Header.css'

function Header() {
    return (
        <>
            <header>
                <div className='container'>
                    <img src={darkor} alt="darkor-icon" />
                    <ul>
                        <li>Vakansiyalar</li>
                        <li>Kandidatlar</li>
                        <li>Kompaniyalar</li>
                        <li>Xizmatlar</li>
                        <li>Ta’lim</li>
                    </ul>
                    <select>
                        <option value="O'zb">O'zb</option>
                        <option value="Rus">Rus</option>
                        <option value="Eng">Eng</option>
                    </select>
                    <button>Boshlash</button>
                </div>
            </header>
        </>
    )
}

export default Header