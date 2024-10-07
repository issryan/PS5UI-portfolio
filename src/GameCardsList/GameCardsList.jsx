import { GameCard } from "../GameCard/GameCard";
import { useMemo } from "react";
import { ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_GAP, CARD_SIZE, CARDS_OFFSET_X, CARDS_OFFSET_Y } from "../constants";

export function GameCardsList({ games, activeIndex = 0, onActiveIndexChange }) {

    const offsets = useMemo(() => {
        const offsetsAr = [];
        let curOffset = CARDS_OFFSET_X - (activeIndex * (CARD_SIZE + CARD_GAP));
        games.forEach((_, i) => {
            offsetsAr.push(curOffset);
            if (i === activeIndex - 1) {
                curOffset += CARD_SIZE + ACTIVE_CARD_GAP;
            } else if (i === activeIndex) {
                curOffset += ACTIVE_CARD_SIZE + ACTIVE_CARD_GAP;
            } else {
                curOffset += CARD_SIZE + CARD_GAP;
            }
        });
        return offsetsAr;
    }, [activeIndex, games]);

    return (
        <>
            {
                games.map((g, i) => {
                    const offset = offsets[i];

                    return (
                        <GameCard 
                            onClick={() => onActiveIndexChange?.(i)}
                            active={i === activeIndex}
                            style={{ position: 'absolute', transform: `translateY(${CARDS_OFFSET_Y}px) translateX(${offset}px)` }}
                            key={g.name} 
                            {...g}
                        />
                    )
                })
            }
        </>
    );
}