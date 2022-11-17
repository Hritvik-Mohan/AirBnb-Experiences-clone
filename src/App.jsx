import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
  const cardElement = data.map(card => {
    return <Card
      key={card.id}
      card={card}
      // {...card}
  />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElement}
      </section>
    </div>
  )
}



// img={card.coverImg}
// rating={card.stats.rating}
// reviewCount={card.stats.reviewCount}
// location={card.location}
// title={card.title}
// price={card.price}
// openSpots={card.openSpots}