// CSS
import styles from './CardSlider.module.css';
import variables from './Variables.module.css';

//IMAGE
import iconperson from '../img/personicon.png';

// CardSlider recebe um objeto "recommendation" como prop
const CardSlider = ({ recommendation }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.img_container}>
        <img src={iconperson} alt="icon"/>
      </div>
      <main className={styles.main_content}>
        <h1>{recommendation.nome}</h1>
        <p>{recommendation.depoimento}</p>
      </main>
    </div>
  );
};

export default CardSlider;