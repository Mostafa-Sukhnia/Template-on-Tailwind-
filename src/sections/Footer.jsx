import { footerLogo } from "../../assets/images"
import { footerLinks, socialMedia } from "../constant"
import { copyrightSign } from "../../assets/icons"
const Footer = () => {
  return (
    <footer className="max-container">
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className="flex flex-col items-start">
<a href='/'>
<img src={footerLogo}
width={150}
height={46}
/>
</a>
<p className=" mt-6 text-white leading-7 sm:max-w-sm">
Get shoes ready for the new term at your nearest Nike store. Find
Your perfect Size In Store. Get Rewards
</p>

<div className="flex items-center gap-5 mt-8 ">
  {
    socialMedia.map((item,index)=>(
      <div className="flex justify-center items-center w-12 h-12 bg-white cursor-pointer hover:bg-[#F7624F] ease-linear rounded-full" key={index}>
        <img src={item.src} alt={item.alt} width={24} height={24}/>
      </div>
    ))
  }
  </div>
</div>
<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
  {footerLinks.map((item,index)=>(
    <div key={index} className="mt-10">
<h4 className="text-white text-2xl mb-6">{item.title}</h4>
<ul>
  {
    item.links.map((item,index)=>(
      <li className="mt-3" key={index}>
      <a href="/" className="text-white hover:text-[#F7624F] ease-linear">{item.name}</a>
      </li>
    ))
  }
</ul>
    </div>
  ))}
</div>

    </div>
    <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer