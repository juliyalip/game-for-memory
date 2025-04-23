import { useCallback , useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GameItem from "../GameItem/GameItem";
import { useStore } from '../../store/store'
import Container from "../Container/Container";
import style from "./gameList.module.scss";

const GameList = () => {
  const { cards, checkCard, isActive, selectedCards , level} = useStore();

  const isChecking = useMemo(() => selectedCards.length === 2, [selectedCards])

  const gridClass = useMemo(() => level === 1 ? style.gridLevel1 : style.gridLevel2  , [level])

  const turnOverCard = useCallback(
    (id: string) => {
      if (isChecking || !isActive) {
        return;
      }
      checkCard(id);
    },
    [isChecking, isActive, checkCard]
  );

  return (
    <Container>
      <TransitionGroup component="ul" className={`${style.container} ${gridClass}`}>
        {cards.map((card) => (
          <CSSTransition key={card.id} timeout={300} classNames={style.fade} unmountOnExit>
            <GameItem onChange={turnOverCard} item={card} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default GameList;