import { useState } from "react"
import "./Metodologia.css"
import MetodologiaCard from "./MetodologiaCard"



const etapas = [
  {
    id: 1,
    numero: "01",
    titulo: "Diagnóstico Estratégico",
    descricao: "Análise de mercado, dores e metas.",
  },
  {
    id: 2,
    numero: "02",
    titulo: "Posicionamento de Marca",
    descricao: "Definição de identidade, tom de voz e proposta de valor.",
  },
  {
    id: 3,
    numero: "03",
    titulo: "Estrutura de Funil",
    descricao: "Mapeamento da jornada do cliente e pontos de conversão.",
  },
  {
    id: 4,
    numero: "04",
    titulo: "Execução Integrada",
    descricao: "Ativação de canais, conteúdo e campanhas de performance.",
  },
  {
    id: 5,
    numero: "05",
    titulo: "Monitoramento de Resultados",
    descricao: "Dashboards em tempo real e revisões de performance.",
  },
  {
    id: 6,
    numero: "06",
    titulo: "Escala Contínua",
    descricao: "Otimização constante baseada em dados para crescimento sustentável.",
  },
]

const Metodologia = () => {
  const [activeId, setActiveId] = useState(1)
  

  return (
    <section className="metodologia">
      <div className="metodologia__container">

        <header className="metodologia__header">
          <div className="metodologia__header-left">
            <div className="metodologia__eyebrow">
              <span className="metodologia__dot" />
              <span className="metodologia__eyebrow-text">Metodologia</span>
            </div>
            <h2 className="metodologia__title">
              Nossa Metodologia: do diagnóstico à escala contínua
            </h2>
          </div>
          <div className="metodologia__header-right">
            <p className="metodologia__subtitle">
              Do branding ao funil de vendas previsível, oferecemos soluções
              integradas para empresas que querem escalar com performance.
            </p>
          </div>
        </header>

        <div className="metodologia__cards">
          {etapas.map((etapa) => (
            <MetodologiaCard
              key={etapa.id}
              numero={etapa.numero}
              titulo={etapa.titulo}
              descricao={etapa.descricao}
              ativo={activeId === etapa.id}
              onClick={() => setActiveId(etapa.id)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Metodologia