import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handlerClick = () => {
        setOpenMenu(!openMenu)
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            setOpenMenu(false)
        }
    })
    const stylesShowMenu = openMenu ? "duration-500 bg-white-400 max-lg:translate-x-[-178%]  max-lg:opacity-100 " : "max-lg:"
    return (
        <header className="padding-x py-8 fixed z-40 w-full ">
            <nav className="flex justify-between items-center max-container relative">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} style={{padding:"10px"}}/>
                </a>
                <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:flex-col max-lg:h-screen max-lg:absolute max-lg:w-[50%] max-lg:translate-x-0 transition-transform  linear right-[-100%]  z-40 -top-8   ${stylesShowMenu}`}>
                    {
                        navLinks.map((link) => (
                            <li key={link.label}>
                                <a 
                                    href={link.href} className="relative fonts-montserrat text-lg p-2 leading-normal text-slate-gray hover:text-coral-red 
                                    after:w-0 after:h-1 after:bg-coral-red hover:after:w-full after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-in-out"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden max-lg:block cursor-pointer z-50" onClick={handlerClick}> 
                    <img src={hamburger} alt="Hamburger icon" width={25} height={25} id="menu-btn" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar