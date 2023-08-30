import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
const Navbar = () => {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src={headerLogo} alt="logo" widt={130} height={29} />
                </a>
            </nav>
            <img src={hamburger} alt="" />
        </header>
    )
}

export default Navbar