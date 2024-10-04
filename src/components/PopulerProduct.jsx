import { star } from "../../assets/icons"
const PopulerProduct = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col mx-sm:w-full">
    <img src={imgURL}/>
    <div className="mt-8 flex justify-start  gap-2.5" >
    <img src={star} width={24} height={24}/>
    <p className="leanding-none text-[#00000085]">(4.5)</p>
    </div>
    <h3 className="mt-2 font-bold text-2xl">{name}</h3>
    <p className="mt-2 text-[#F7624F] font-bold">{price}</p>
    </div>
  )
}

export default PopulerProduct