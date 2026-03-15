import "./MetodologiaCard.css"


const MetodologiaCard = ({ numero, titulo, descricao, ativo, onClick }) => {
  return (
    <div
      className={`metodologia-card ${ativo ? "metodologia-card--ativo" : ""}`}
      onClick={onClick}
    >

      <span className="metodologia-card__numero">{numero}</span>
      <h3 className="metodologia-card__titulo">{titulo}</h3>

      {ativo && (
        <p className="metodologia-card__descricao">{descricao}</p>
      )}

      <div className="metodologia-card__radio">
        <div className="metodologia-card__radio-inner" />
      </div>

    </div>
  )
}

export default MetodologiaCard