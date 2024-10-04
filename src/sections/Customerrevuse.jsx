import { reviews } from "../constant"
import ReviewCard from "../components/ReviewCard"
const Customerrevuse = () => {
  return (
    <section className="max-container">
    <h3 className="text-center text-4xl font-bold">
What Our
<span className="text-[#F7624F]"> Customers </span>
Say?
    </h3>
    <p className="m-auto mt-4 max-w-lg text-wrap text-center"> Hear genuine stories from our satisfied customers about their
    exceptional experiences with us.</p>
    <div className="mt-24 flex flex-1 justify-evenly flex-col items-center gap-14 lg:flex-row">
{
  reviews.map((item)=>( 
    <ReviewCard key={item.customerName} imgURL={item.imgURL} customerName={item.customerName} rating={reviews.rating} feedback={item.feedback} />
  ))
}
    </div>
    </section>
  )
}

export default Customerrevuse