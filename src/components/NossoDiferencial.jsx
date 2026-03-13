import DiferencialCard from './DiferencialCard';
import styles from './NossoDiferencial.module.css';
import { Powerbi, Aim, Brain, Custom } from '../assets/icons';

const cards = [
  {
    id: 1,
    icon: <Powerbi />,
    title: <>BI em <br /> tempo real</>,
    description: 'Dashboards exclusivos com indicadores atualizados.',
  },
  {
    id: 2,
    icon: <Aim />,
    title: <>Foco no <br /> que importa</>,
    description: 'Equipe multidisciplinar orientada a resultado.',
  },
  {
    id: 3,
    icon: <Brain />,
    title: <>Mais que <br /> execução</>,
    description: 'Inteligência estratégica para escalar seu negócio.',
  },
  {
    id: 4,
    icon: <Custom />,
    title: <>Processos personalizados</>,
    description: 'Estratégias criadas sob medida para suas metas.',
  },
];

const NossoDiferencial = () => {
  return (
    <section className={styles.section}>
      <img className={styles.brilhobg} src="/src/assets/nossodiferencial-brilho.png" alt="brilhobg" />
      <div className={styles.container}>
        <img className={styles.brilhobg} src="/src/assets/nossodiferencial-brilho.png" alt="brilhobg" />
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span className={styles.eyebrowText}>Nosso diferencial</span>
          </div>
          <h2 className={styles.title}>
            Não precisa de mais uma agência.<br />
            Precisa de crescimento.
          </h2>
          <p className={styles.subtitle}>
            Do branding ao funil de vendas previsível, oferecemos soluções integradas
            para empresas que querem escalar com performance.
          </p>
        </header>

        <div className={styles.cardsContainer}>
          {cards.map((card) => (
            <DiferencialCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NossoDiferencial;
