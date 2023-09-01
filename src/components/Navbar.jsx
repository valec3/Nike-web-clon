import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
    const handlerClick = () => {
        console.log("click")
    }
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} style={{padding:"10px"}}/>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
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
                <div className="hidden max-lg:block cursor-pointer" onClick={handlerClick}> 
                    <img src={hamburger} alt="Hamburguer icon" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar