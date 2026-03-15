import "./CaseCard.css"

const CaseCard = ({ logo, conquistas }) => {
  return (
    <div className="case-card">

      <div className="case-card__image-wrapper">
        <img src={logo.src} alt={logo.alt} className="case-card__logo" />
      </div>

      <div className="case-card__conquistas">
        {conquistas.map((item, index) => (
          <div key={index} className="case-card__conquista">
            <span className="case-card__valor">{item.valor}</span>
            <span className="case-card__descricao">{item.descricao}</span>
          </div>
        ))}
      </div>

      <a href="#" className="case-card__link">
        Ver case completo
        <span className="case-card__arrow">↗</span>
      </a>

      <div className="case-card__linha" />

    </div>
  )
}

export default CaseCard