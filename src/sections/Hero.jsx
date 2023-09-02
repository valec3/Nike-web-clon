import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <div
            id="home"
            className="w-full p-2 flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-lg:padding-x lg:px-16 pt-28">
                <p className="text-xl font-montserrat text-coral-red">Nuestra colección de verano</p>
                <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[72px] z-10">
                    <span 
                        className="xl:bg-white xl:whitespace-nowrap relative pr-10"
                    >La Nueva Llegada</span>
                    <br />
                    Zapatillas <span className="text-coral-red inline-block mt-3">Nike</span>
                </h1>
                <p
                    className="font-montserrat text-slate-gray leading-8 text-lg mt-7 mb-14 sm:max-w-sm"
                >
                    Descubre lo último de Nike, comodidad de calidad e innovación para tu vida activa.
                </p>
                <Button 
                    label="Show now" 
                    iconUrl={arrowRight}
                />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {
                        statistics.map(({value, label}) => (
                            <div key={value}>
                                <p className="text-4xl font-palanquin font-bold">{value}</p>
                                <p className="leading-7 font-montserrat">{label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="relative  flex-1 flex justify-center items-center xl:min-h-screen max-lg:py-40 bg-primary bg-hero bg-cover bg-center lg:py-40">
                <img 
                    src={bigShoeImg} alt="image shoe hero" 
                    width={610}
                    height={500}
                    className="object-contain relative z-9"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] justify-center sm:px-6">
                    {
                        shoes.map(shoe=>(
                            <div key={shoe.id}>
                                <ShoeCard shoe={shoe} changeBigShoeImg={(shoe)=>setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero