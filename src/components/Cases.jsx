import "./Cases.css"
import CaseCard from "./CaseCard"
import logoR8 from "../assets/logo-r8.png"
import logoCafezale from "../assets/logo-cafezale.png"
import { useRef } from "react"

const cases = [
  {
    id: 1,
    logo: { src: logoR8, alt: "Agência R8" },
    conquistas: [
      { valor: "180%", descricao: "No faturamento em 6 meses" },
      { valor: "3x", descricao: "No volume de leads qualificados" },
    ],
  },
  {
    id: 2,
    logo: { src: logoCafezale, alt: "Cafezale" },
    conquistas: [
      { valor: "90%", descricao: "De aumento no ticket médio" },
      { valor: "2x", descricao: "Na retenção de clientes" },
    ],
  },
  {
    id: 3,
    logo: { src: logoR8, alt: "Cliente 3" },
    conquistas: [
      { valor: "40%", descricao: "Redução no CAC" },
      { valor: "5x", descricao: "No ROAS em campanhas pagas" },
    ],
  },
  {
    id: 4,
    logo: { src: logoCafezale, alt: "Cliente 4" },
    conquistas: [
      { valor: "120%", descricao: "De crescimento orgânico" },
      { valor: "8x", descricao: "No engajamento social" },
    ],
  },
]

const Cases = () => {
const scrollRef = useRef(null)
  let isDown = false
  let startX
  let scrollLeft

  const handleMouseDown = (e) => {
    isDown = true
    scrollRef.current.classList.add("cases__scroll-wrapper--dragging")
    startX = e.pageX - scrollRef.current.offsetLeft
    scrollLeft = scrollRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    isDown = false
    scrollRef.current.classList.remove("cases__scroll-wrapper--dragging")
  }

  const handleMouseUp = () => {
    isDown = false
    scrollRef.current.classList.remove("cases__scroll-wrapper--dragging")
  }

  const handleMouseMove = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="cases">
      <div className="cases__container">

        <header className="cases__header">
          <div className="cases__header-left">
            <div className="cases__eyebrow">
              <span className="cases__dot" />
              <span className="cases__eyebrow-text">Cases</span>
            </div>
            <h2 className="cases__title">
              Resultados que comprovam nossa performance
            </h2>
          </div>
          <div className="cases__header-right">
            <p className="cases__subtitle">
              De indústrias a e-commerces, de clínicas a agronegócios —
              entregamos resultados reais que escalam negócios.
            </p>
          </div>
        </header>

      </div>
      <div 
          ref={scrollRef}
          className="cases__scroll-wrapper"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
        <div className="cases__cards">
          {cases.map((item) => (
            <CaseCard
              key={item.id}
              logo={item.logo}
              conquistas={item.conquistas}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases