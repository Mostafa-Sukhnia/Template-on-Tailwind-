const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex flex-1 sm:w-[350px]
    sm:min-w-[350px] w-full rounded-[20px]
    shadow-2xl px-10 py-12
    flex-col
    ">
<div className="w-11 h-11 flex justify-center items-center bg-[#F7624F] rounded-full">
    <img src={imgURL} alt={label} width={24} height={24}/>
</div>
<h3 className="my-4 text-3xl font-bold">{label}</h3>
<p className="mt-3 text-lg break-words text-slate-400">{subtext}</p>
    </div>
  )
}

export default ServicesCard