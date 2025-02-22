//CSS
import styles from './Footer.module.css';
import variables from './Variables.module.css';

//IMAGE
import instagram from '../img/instagram.png';
import youtube from '../img/youtube.png';
import whatsapp from '../img/whatsapp.png';

function Footer() {
  return (
    <div className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Script Heroes. Todos os direitos reservados.</p>
        
            <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/jmvcodes/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.youtube.com/@jeanmicheldev" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://wa.me/message/DJUAHGN6D22RP1" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="Whatsapp" style={{ width: '30px', height: '30px' }} />
                </a>
            </div>
    </div>
  );
}

export default Footer;
