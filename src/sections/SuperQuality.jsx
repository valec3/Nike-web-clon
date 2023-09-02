import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <div 
            id="about-us" 
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-col flex-1">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span 
                        className="xl:bg-white xl:whitespace-nowrap relative pr-10"
                    >We provide you</span>
                    Zapatillas de 
                    <span className="text-coral-red">Super</span>
                    <span className="text-coral-red">Calidad</span>
                </h2>
                <p
                    className="mt-4 lg:max-w-lg info-text"
                >
                    Ensuring premium comfort and style, our meticulously crafted footwear is to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className="mt-11">
                    <Button 
                        label="Ver detales" 
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img src={shoe8} alt="Zapatilla" width={570} height={522} className="object-contain" />
            </div>
        </div>
    )
}

export default SuperQuality