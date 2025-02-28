import React, { useState, useEffect } from 'react';
import CardSlider from './CardSlider';
import styles from './Slider.module.css';
import variables from './Variables.module.css';

const Slider = () => {
  const recommendations = [
    {
      nome: "Davi",
      depoimento: "Durante mais de 2 anos na Codebuddy, tive a sorte de aprender com um professor incrível. Seus métodos dinâmicos, práticos e bem explicados me ajudaram a desenvolver minha lógica e paixão pela programação. Hoje, programo graças a ele! Agradeço por ter me guiado até realizar meu sonho de passar no concurso de Ciência da Computação."
    },
    {
      nome: "Rodrigo",
      depoimento: "Tenho o prazer de recomendar o Professor Jean como um excelente professor de programação. Sua abordagem pedagógica é clara, objetiva e adaptada às necessidades de seus alunos, desde iniciantes até aqueles com maior familiaridade com a tecnologia."
    },
    {
      nome: "João Pedro",
      depoimento: "Já trabalhei com ele durante alguns anos e sei que é um ótimo professor, aulas super didáticas e divertidas!!!"
    },
    {
      nome: "Victória",
      depoimento: "O professor Jean é excelente! Didático, pontual, responsável, tem alto conhecimento específico e muito comprometido com o faz. Da para perceber que ele ama o que faz e transmite essa paixão ao ensinar."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider_container}>
        <h1>Recomendações</h1>
      <div className={styles.carousel_inner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {recommendations.map((recommendation, index) => (
          <div key={index} className={styles.carousel_item}>
            <CardSlider recommendation={recommendation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;