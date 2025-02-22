import React, { useState } from 'react';
import styles from './CardDescription.module.css';
import variables from './Variables.module.css';

//IMAGE
import imageJogos from '../img/jogos.png';
import imageRoblox from '../img/roblox.png';
import imageWeb from '../img/web.png';
import imageRobotica from '../img/robotica.png';
import imageTreinamento from '../img/treinamento.jpg';


function CardDescription() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dados dos cards
  const cards = [
    {
      title: 'Curso de Jogos',
      image: imageJogos,
      description: 'Descubra o fascinante mundo da criação de jogos! Neste curso, você aprenderá a desenvolver jogos digitais do zero, utilizando ferramentas profissionais e técnicas avançadas de programação e design. Desde a concepção da ideia até a publicação, você dominará todos os passos para criar jogos envolventes e interativos. Ideal para quem deseja entrar na indústria de games ou transformar sua paixão por jogos em uma carreira promissora.',
    },
    {
      title: 'Curso de Roblox',
      image: imageRoblox,
      description: 'Transforme sua criatividade em realidade com o Curso de Roblox! Aprenda a criar seus próprios jogos e experiências no Roblox Studio, utilizando scripts em Lua e ferramentas de design 3D. Este curso é perfeito para iniciantes e entusiastas que desejam explorar o universo do Roblox, criar mundos virtuais únicos e até mesmo monetizar suas criações. Vamos construir, programar e compartilhar jogos incríveis juntos!',
    },
    {
      title: 'Curso de Robótica',
      image: imageRobotica,
      description: 'Explore o futuro da tecnologia com o Curso de Robótica! Aqui, você vai aprender a montar e programar robôs utilizando kits de robótica e linguagens de programação como Arduino e Python. Desde conceitos básicos de eletrônica até projetos avançados de automação, este curso é ideal para quem quer desenvolver habilidades práticas e inovadoras. Prepare-se para criar soluções inteligentes e mergulhar no mundo da automação e da inteligência artificial.',
    },
    {
      title: 'Curso de Web',
      image: imageWeb,
      description: 'Domine as tecnologias que movem a internet com o Curso de Web! Aprenda a criar sites e aplicações web modernas e responsivas, utilizando HTML, CSS, JavaScript e frameworks como React e Node.js. Este curso é perfeito para quem deseja se tornar um desenvolvedor web full-stack, criando interfaces incríveis e sistemas robustos. Do front-end ao back-end, você estará pronto para construir o futuro digital.',
    },
    {
      title: 'Treinanento',
      image: imageTreinamento,
      description: 'Capacite-se para o futuro da educação com o Treinamento de Professores para programação e robótica! Este curso oferece ferramentas e metodologias inovadoras para transformar sua prática pedagógica. Aprenda a integrar tecnologia em sala de aula, desenvolver aulas mais dinâmicas e engajadoras, e utilizar recursos digitais para potencializar o aprendizado dos alunos. Ideal para educadores que desejam se adaptar às demandas do século XXI e inspirar a próxima geração.',
    },
  ];

  // Função para navegar para a próxima seção
  const nextSection = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 < cards.length ? prevIndex + 1 : 0));
  };

  // Função para navegar para a seção anterior
  const prevSection = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : cards.length - 1));
  };

  return (
    <div className={styles.carousel}>
  <button className={styles.arrow_button} onClick={prevSection}>
    &#10094; {/* Seta para a esquerda */}
  </button>
  <div className={styles.card_container}>
    {cards.slice(currentIndex, currentIndex + 1).map((card, index) => (
      <div key={index} className={styles.card}>
        <div className={styles.additional}>
          <div className={styles.user_card}>
            <div className={styles.course_name}>
              <span>{card.title}</span>
              <div className={styles.div_icon}>
                <img className={styles.icon_course} src={card.image} alt="user" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h2>{card.description}</h2>
        </div>
      </div>
    ))}
  </div>
  <button className={styles.arrow_button} onClick={nextSection}>
    &#10095; {/* Seta para a direita */}
  </button>
</div>
  );
}

export default CardDescription;