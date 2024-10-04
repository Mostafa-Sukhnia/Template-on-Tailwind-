import ServicesCard from "../components/ServicesCard.jsx"
import { services } from "../constant/index.js"
const Services = () => {
  return (
    <section>
    <div className="max-container max-container flex justify-center flex-wrap gap-9">
      {
        services.map((item)=>(
          <ServicesCard key={item.label} {...item}/>
        ))
      }
    </div>
    </section>
  )
}
export default Services