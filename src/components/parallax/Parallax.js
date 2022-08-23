import Home from './../home/Home'
import Features from '../features/Features'
import About from '../about/About'
import Products from '../products/Products'
import Opinions from '../opinions/Opinions'

const Parallax = () => {
  return (
    <div>
      <main>
        <section className="module parallax parallax-1">
          <Home/>
        </section>
        <section className="module content">
          <Features />
        </section>
        <section className="module parallax parallax-2">
          <About />
        </section>
        <section className="module content">
          <Products />
        </section>
        <section className="module parallax parallax-3">
          <Opinions />
        </section>
      </main>
    </div>
  )
}

export default Parallax
