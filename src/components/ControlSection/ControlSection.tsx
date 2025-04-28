import {  useEffect, useCallback } from "react";
import { useStore } from "../../store/store";
import Button from "../Button/Button";
import StatSection from "../StatSection/StatSection";
import style from './controlSection.module.scss'

const ControlSection = () => {
  
  const { isActive, setLevel, setIsActive,  cards, selectedCards } = useStore();

  const isChecking = selectedCards.length === 2;
  const isGameOver = cards.every((card) => card.removed);

  const startGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isChecking || isActive) {
      return;
    }
    const level = Number(e.currentTarget.dataset.level) as 1 | 2;
    setLevel(level);
    setIsActive(true);
  };

  const stopGame = useCallback(() => {
    if (!isActive) {
      return;
    }
    setIsActive(false);
  }, [isActive,  setIsActive ]);

  useEffect(() => {
    if (isGameOver) {
      stopGame();
    }
  }, [isGameOver, stopGame]);

  return (
    <div className={style.container}>
      <div className={style.sectionBtn}>
        <Button onClick={startGame} data-level="1" disabled={isActive}>
          {" "}
          Start level 1
        </Button>
        <Button onClick={startGame} data-level="2" disabled={isActive}>
          Start leve2
        </Button>
        <Button onClick={stopGame} disabled={!isActive}>
          Stop game
        </Button>
      </div>
     <StatSection  />
    </div>
  );
};
export default ControlSection;