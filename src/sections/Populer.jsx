import { products } from "../constant";
import PopulerProduct from "../components/PopulerProduct";
const Populer = () => {
  return (
    <section className="max-container max-sm:mt-12">
    <div>
      <h1 className="xl:text-6xl text-4xl  text-nowrap font-bold">Our <span className="text-[#F7624F]">Populer</span> Products</h1>
      <p className="my-4 text-lg text-wrap"> manages and identifies elements within a list. When rendering lists or arrays of components,<br/> React uses the key prop to uniquely identify each element. This helps </p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
      {
products.map((item)=>(
 <PopulerProduct key={item.name}{...item}/>
)
)
      }
    </div>
</section>
  )
}

export default Populer