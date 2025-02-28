import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Começa no índice 1 devido ao clone
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselRef = useRef(null);

  // Adiciona clones no início e no final
  const clonedItems = [
    items[items.length - 1], // Clone do último item no início
    ...items, // Itens originais
    items[0], // Clone do primeiro item no final
  ];

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= clonedItems.length - 1) {
          // Desativa a transição ao reiniciar
          setTransitionEnabled(false);
          return 0; // Volta ao início sem animação
        }
        return prevIndex + 1;
      });
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [items.length, clonedItems.length]);

  // Reativa a transição após reiniciar
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentIndex(1); // Volta ao primeiro item real com animação
      }, 50); // Pequeno atraso para garantir que a transição seja aplicada
    }
  }, [currentIndex]);

  if (items.length === 0) {
    return <div>Nenhum item para exibir</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        ref={carouselRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {clonedItems.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;