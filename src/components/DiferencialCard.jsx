import styles from './DiferencialCard.module.css';

const DiferencialCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default DiferencialCard;
