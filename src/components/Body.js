//CSS
import styles from './Body.module.css';
import mainImage from '../img/main_image.png';

function Body() {
  return (
    <div class={styles.container}> 
      <div class={styles.text_content}> 
        <h1 className={styles.title_h1}>Bem-vindo ao Mundo da Programação!</h1> 
        <p>Aprenda a programar com aulas práticas e dinâmicas para transformar sua carreira!</p> 
        <div class={styles.button}>Venha conhecer!</div> 
      </div>
      <div class={styles.image_content}> 
        <img src={mainImage} alt="Imagem de Programação"/> 
      </div>
    </div>
  );
}

export default Body;
