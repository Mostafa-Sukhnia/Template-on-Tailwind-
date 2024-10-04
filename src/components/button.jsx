const Button = ({label, iconURL, backgroundColor,borderColor,textColor, Fullwidth}) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${Fullwidth && 'w-full'} ${
      backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-[#f7624f] text-white'
    }`}>{label} {iconURL &&
    <img className="ml-2 rounded-full h-5 w-5" src={iconURL} alt="arrow right"></img>
    } </button>
  )
}

export default Button