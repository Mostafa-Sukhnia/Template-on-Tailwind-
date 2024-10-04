import { star } from "../../assets/icons"

const ReviewCard = ({imgURL, rating,customerName,feedback}) => {
  return (
    <div className="flex justify-center flex-col items-center">
    <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
    <p className="text-blax max-w-sm text-center mt-6">{feedback}</p>
    <div className="flex justify-center items-center gap-2 mt-4">
        <img src={star} alt="start" width={24} height={24} className="object-contain m-0" />
        <p className="text-lg">(4.5)</p>
    </div>
    <h3 className="mt-4 font-bold text-2xl">{customerName}</h3>
    </div>
  )
}

export default ReviewCard