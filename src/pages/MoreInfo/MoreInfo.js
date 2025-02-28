//IMPORTS SYSTEM
import { Link } from 'react-router-dom';

//CSS
import styles from './MoreInfo.module.css';
import variables from '../../components/Variables.module.css';

// Components
import Footer from '../../components/Footer';
import CardInfo from '../../components/CardInfo';
import CardDescription from '../../components/CardDescription';
import Slider from '../../components/Slider';

function MoreInfo() {
  return (
    <>
    <div className={styles.Info}>
      <CardInfo />
      <CardDescription />
    </div>
    <div>
      <Link to="/" className={styles.customButton}>Voltar</Link>
    </div>
    <div className={styles.Recommendations}>
      <Slider />
    </div>
    <div className={styles.Footer}>
      <Footer />
    </div>
    </>
  );
}

export default MoreInfo;