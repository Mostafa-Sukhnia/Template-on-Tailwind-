import  {Hero,Populer,SupperQuality,Services,SpacialOffers,Customerrevuse,Subscribe,Footer,} from './sections/index.js'
import Nav from './components/Nav.jsx'; 
const App = () => 
 (
    <main>
    <Nav/>
   <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <Populer/>
    </section>
    <section className="padding">
      <SupperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
    <SpacialOffers/>
    </section>
    <section className="bg-blue-50 padding">
      <Customerrevuse/>
    </section>
    <section className="padding-x sm:py-32 px-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
    </main>
  )

export default App;