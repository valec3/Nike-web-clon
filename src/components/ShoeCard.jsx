
// eslint-disable-next-line react/prop-types
const ShoeCard = ({shoe,changeBigShoeImg,bigShoeImg}) => {
    const colorBorder = bigShoeImg === shoe.bigShoe ? "border-coral-red" : "border-transparent";
    const handlerClick = () => {
        if(bigShoeImg !== shoe.bigShoe){
            changeBigShoeImg(shoe.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${colorBorder} cursor-pointer max-sm:flex-1`}
            onClick={handlerClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src={shoe.thumbnail} alt="zapatilla" width={127} height={103} className="object-contain"/>
            </div>
        </div>
    ) 
}

export default ShoeCard