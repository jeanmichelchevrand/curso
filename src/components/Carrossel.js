//IMPORTS SYSTEM
import { Link } from 'react-router-dom';

//CSS
import styles from './Carrossel.module.css';

//IMAGE
import imageJogos from '../img/jogos.jpg';
import imageRoblox from '../img/roblox.jpg';
import imageWeb from '../img/web.jpg';
import imageRobotica from '../img/robotica.jpg';
import imageTreinamento from '../img/treinamento.jpg';

function Carrossel() {
  return (
    <div class={styles.courses}>
      <h2>Conheça os nossos cursos</h2>
        <div class={styles.courses_container}>
          <div class={styles.course_card}>
            <img src={imageJogos} alt="3D Game Start"/>
            <p className={styles.course_title}>Desenvolvimento de Jogos</p>
          </div>
          <div class={styles.course_card}>
            <img src={imageRoblox} alt="Pixel Top Down"/>
            <p className={styles.course_title}>Roblox Studio</p>
          </div>
          <div class={styles.course_card}>
            <img src={imageWeb} alt="DevTuber"/>
            <p className={styles.course_title}>Desenvolvimento Web</p>
          </div>
          <div class={styles.course_card}>
            <img src={imageRobotica} alt="Imagem do curso de Robótica"/>
            <p className={styles.course_title}>Robótica</p>
          </div>
          <div class={styles.course_card}>
            <img src={imageTreinamento} alt="Imagem do curso de Treinamento de Professores"/>
            <p className={styles.course_title}>Treinamento de Professores</p>
          </div>
        </div>
        <Link to="/+Info" className={styles.btn}>Para mais informações</Link>
    </div>
  );
}

export default Carrossel;
