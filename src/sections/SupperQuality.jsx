import Button from "../components/button";
import { shoe8 } from "../../assets/images"; 
const SupperQuality = () => {
  return (
    <section
    id='SupperQuality'
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
<div className="flex flex-1 flex-col w-full">
      <h1 className='mt-10 font-palanquin text-4xl lg:text-6xl  lg:max-w-2xl max-w-lg capitalize font-bold '>
         We Provide You 
      
        <span className='text-[#F7624F] xl:whitespace-nowrap relative z-10 pr-10'> Nkie</span>
        <br />
        <span className='text-[#F7624F] xl:whitespace-nowrap relative z-10'>Quality </span>Shoes
      </h1>
      <p className='mt-4 lg:max-w-lg text-slate-500 text-lg leading-7'>
      Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
      </p>
<p className="mt-6 lg:max-w-lg  text-slate-500 text-lg leading-7">Our dedication to detail and excellence ensures your satisfaction</p>
      <div className="mt-11">
      <Button label='Shop now' />
      </div>
</div>
<div className="flex justify-center items-center">
<img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
</div>
    </section>
  )
}

export default SupperQuality