import Button from "../components/button"
const Subscribe = () => {
  return (
    <section id="Subscribe" className="max-container flex justify-between items-center max-lg:flex-col gap-10 py-10 px-10 ">
    <h3 className="text-4xl font-bold leading-[68px] lg:max-wpmd">
      Sign Up from
      <span className="text-[#F7624F]"> Update </span>&& NewsLetters
    </h3>
    <div className="lg:max--w-[50%] w-full flex justify-between items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:slate-gray rounded-full ">
      <input type="text" placeholder="subscribe@nike.com" className="pl-4 sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full"/>
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label="Sign Up"
          Fullwidth
        />
      </div>
    </div>
    </section>
  )
}

export default Subscribe