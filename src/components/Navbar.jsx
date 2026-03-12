import { Link } from "react-router-dom"
import Button from "./Button"
import "./Button.css"
import { useState } from "react"
import Logo from "../assets/logo.svg?react"

function Navbar() {
  const [dropdownAberto, setDropdownAberto] = useState(false)
  
  return (
    <nav className={`navbar ${dropdownAberto ? "navbar--ativo" : ""}`}>
      <div className="navbar__inner">

        <div className="navbar__logo">
          <Link to="/">
            <Logo className="navbar__logo-svg" aria-label="Logo" />
          </Link>
        </div>

        <ul className="navbar__links">

          <li className="navbar__item">
            <Link to="/">A Agência</Link>
          </li>

          <li className="navbar__item navbar__item--dropdown" onMouseEnter={() => setDropdownAberto(true)}
            onMouseLeave={() => setDropdownAberto(false)}>
            <span className="navbar__item-titulo">Soluções</span>
            <div className="dropdown">
              <div className="dropdown__inner">

                <ul className="dropdown__coluna">
                  <span className="dropdown__coluna-titulo">Marketing</span>
                  <div className="dropdown__coluna-content">
                    <li>Midia e perfomance</li>
                    <li>Inbound Marketing</li>
                    <li>Audiovisual</li>
                    <li>Automação de marketing</li>
                    <li>Landing page e hotsites</li>
                    {/* ... */}
                  </div>
                </ul>

                <ul className="dropdown__coluna">
                  <span className="dropdown__coluna-titulo">Tecnologia</span>
                  <div className="dropdown__coluna-content">
                    <li>Suporte e manutenção</li>
                    <li>Landing page e hotsites</li>
                    <li>Sites Institucionais</li>
                    <li>E-commerce</li>
                    <li>Hospedagem de sites</li>
                    <li>E-mail Profissional</li>
                    {/* ... */}
                  </div>
                </ul>

                <ul className="dropdown__coluna">
                  <span className="dropdown__coluna-titulo">Vendas</span>
                  <div className="dropdown__coluna-content">
                    <li>Item 1</li>
                    {/* ... */}
                  </div>
                </ul>

              </div>
            </div>
          </li>

          <li className="navbar__item">
            <Link to="/sobre">Sobre</Link>
          </li>

          <li className="navbar__item">
            <Link to="/projetos">Projetos</Link>
          </li>

        </ul>

        <div className="navbar__botao">
          <Button variante="outline">Agende sua reunião</Button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar