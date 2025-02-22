//CSS
import styles from './CardInfo.module.css';

//IMG
import mainImage from '../img/eu.png';

function CardInfo() {
  return (
    <div className={styles.card_container}>
		<img className={styles.round} src={mainImage} alt="user" />
	<h3>Jean Michel</h3>
	<p>Professor | Front-End <br/> Desenvolvedor de Jogos</p>
	<div className={styles.description}>
		<p>Sou professor de programação há mais de 6 anos, com experiência em desenvolvimento de jogos, web e mobile.</p>
	</div>
	<div className={styles.skills}>
		<h6>Skills</h6>
		<ul>
			<li>Unity</li>
			<li>Scratch</li>
			<li>Roblox Studio</li>
			<li>Construct 3</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
		</ul>
	</div>
</div>
  );
}

export default CardInfo;
