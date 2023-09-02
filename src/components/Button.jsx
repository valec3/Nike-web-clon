
// eslint-disable-next-line react/prop-types
const Button = ({label, iconUrl}) => {
    return (
        <button className="flex justify-center gap-2 items-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:opacity-90 group">
            {label}
            {iconUrl && <img src={iconUrl} alt="icon image" className="ml-2 rounded-full w-5 h5 group-hover:translate-x-1 transition-all duration-500 "/>}
        </button>
    )
}

export default Button