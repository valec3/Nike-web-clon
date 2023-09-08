import ReviewCard from "../components/ReviewCard";
import {reviews} from "../constants";
const CustomerReviews = () => {
    return (
        <div className="max-container ">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                ¿Que dicen nuestros <span className="text-coral-red "> clientes</span> ?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center ">
                Hear genuine stories from our satisfied customers about their exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {
                    reviews.map((review) => (
                        <ReviewCard 
                            key={review.customerName} 
                            imgURL={review.imgURL} 
                            customerName={review.customerName} 
                            rating={review.rating} 
                            feedback={review.feedback}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CustomerReviews