import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <footer className="max-container ">
            <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col ">
                <div className="flex  flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="logo footer" width={150} height={46} />
                    </a>
                    <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect Size In Store. Get Rewards</p>
                    <div className="flex items-center gap-5 mt-8">
                        {
                            socialMedia.map((item) => (
                                <div key={item.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-white-400">
                                    <img src={item.src} alt={item.alt} width={24} height={24} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {
                        footerLinks.map((item) => (
                            <div key={item.title} className="flex flex-col items-start">
                                <h4 className="text-white font-montserrat text-2xl font-medium mb-6 leading-normal">{item.title}</h4>
                                <ul>
                                    {
                                        item.links.map((link) => (
                                            <li key={link.name} className="text-white text-base leading-7 font-montserrat cursor-pointer hover:text-white-400"><a href={link.link}>{link.name}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center font-montserrat  cursor-pointer gap-3">
                    <img src={copyrightSign} alt="copyright" width={20} height={20}  className="rounded-full m-0"/>
                    <p>Copyright. All rights reserved</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms conditions</p>
            </div>
        </footer>
    )
}

export default Footer