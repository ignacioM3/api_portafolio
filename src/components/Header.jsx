import React, { useState } from 'react'

export const Header = () => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const HandleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu)
    }

    const [activeNav, setActiveNav] = useState("#home");

    const [scroll, setScroll] = useState(false);

    const checkScroll = () =>{

        if(window.scrollY < 800){
            setBurgerMenu(false)
        }
        if (scroll && window.pageYOffset <= 600) {
            setScroll(false);
            setActiveNav("#home");
          } else if (!scroll && window.pageYOffset > 700 && window.pageYOffset < 1249 ) {
            setScroll(true);
            setActiveNav("#about");
          } else if (window.pageYOffset > 1250 && window.pageYOffset < 2100) {
            setActiveNav("#portafolio");
          } else if (window.pageYOffset > 2101 && window.pageYOffset < 2800) {
            setActiveNav("#contacto");
          }
    }
    window.addEventListener("scroll", checkScroll);


    return (
        <header className='header-menu'>
            <nav className='navBar'>
                <div className='brand'>
                    <a href="#home" ><h2>I<span>M</span></h2></a>
                </div>
                <div className='burger-menu' onClick={HandleBurgerMenu}>
                    <i class="fa-solid fa-bars"></i>
                </div>

                <ul className='menu-desktop' >
                    <li><a href="#home" className={activeNav === "#home" ? "active" : ""} >Home</a></li>
                    <li><a href="#about" className={activeNav === "#about" ? "active" : ""} >Sobre mi</a></li>
                    <li><a href="#portafolio" className={activeNav === "#portafolio" ? "active" : ""} >Portafolio</a></li>
                    <li><a href="#contacto" className={activeNav === "#contacto" ? "active" : ""} >Contacto</a></li>
                </ul>
            </nav>
            <ul className='menu-mobile' id={burgerMenu ? "hidden" : ""}>
                <li onClick={HandleBurgerMenu}><a href="#home" className={activeNav === "#home" ? "active" : ""} >Home</a></li>
                <li onClick={HandleBurgerMenu}><a href="#about" className={activeNav === "#about" ? "active" : ""} >Sobre mi</a></li>
                <li onClick={HandleBurgerMenu}><a href="#portafolio" className={activeNav === "#portafolio" ? "active" : ""} >Portafolio</a></li>
                <li onClick={HandleBurgerMenu}><a href="#contacto" className={activeNav === "#contacto" ? "active" : ""} >Contacto</a></li>
            </ul>
        </header>
    )
}
