/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Button = ({
    label, 
    iconUrl,
    backgroundColor="bg-coral-red",
    borderColor="border-coral-red",
    textColor="text-white"

}) => {
    return (
        <button className={`flex justify-center gap-2 items-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor}  ${textColor} ${borderColor} hover:opacity-90 group`}
        >
            {label}
            {iconUrl && <img src={iconUrl} alt="icon image" className="ml-2 rounded-full w-5 h5 group-hover:translate-x-1 transition-all duration-500 "/>}
        </button>
    )
}

export default Button