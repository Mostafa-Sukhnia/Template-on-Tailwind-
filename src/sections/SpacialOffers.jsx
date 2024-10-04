import { offer } from "../../assets/images"
import Button from "../components/button"
const SpacialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse g-10 max-container">
    <div className="flex-1 ">
      <img src={offer} width={773} height={687} className="object-contain w-full"/>
    </div>
    <div className="flex flex-1 flex-col w-full mb-6">
      <h1 className='mt-10 font-palanquin text-4xl lg:text-6xl  lg:max-w-2xl max-w-lg capitalize font-bold '>
    
        <span className='text-[#F7624F] xl:whitespace-nowrap relative z-10 '>Special </span>Offer
      </h1>
      <p className='mt-4 lg:max-w-lg text-slate-500 text-lg leading-7'>
      Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
      </p>
<p className="mt-6 lg:max-w-lg  text-slate-500 text-lg leading-7">
Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
</p>
      <div className="mt-11 flex justify-start gap-4">
      <Button label='Shop now' />
      <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
      </div>
</div>

    </section>
  )
}

export default SpacialOffers