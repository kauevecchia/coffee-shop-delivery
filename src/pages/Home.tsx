import { Card } from '../components/Card'
import { HeroSection } from '../components/HeroSection'
import { coffees } from '../store/coffeesData'

export function Home() {
  return (
    <main>
      <HeroSection />

      <section className="mt-24 max-w-7xl mx-auto">
        <h2 className="font-baloo font-extrabold text-2xl">Nossos cafés</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 mt-14">
          {coffees.map((coffee) => (
            <Card coffeeData={coffee} />
          ))}
        </div>
      </section>
    </main>
  )
}
