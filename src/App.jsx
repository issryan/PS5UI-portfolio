import './App.scss';
import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { CrossFader } from 'react-cross-fader';
import { GameCardsList } from "./GameCardsList/GameCardsList";
import { ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_SIZE, CARDS_OFFSET_X, CARDS_OFFSET_Y } from "./constants";
import { games } from "./games";
import { usePrevious } from "./hooks/use-previous";

// Sound files setup
const navigateSound = new Howl({
    src: ['/sounds/menu.mp3'],
    volume: 0.3
});

const loadSound = new Howl({
    src: ['/sounds/home_menu_load.mp3'],
    volume: 0.3
});

const backgroundMusic = new Howl({
    src: ['/sounds/background.mp3'],
    loop: true,
    volume: 0.2
});

function App() {
    const [active, setActive] = useState(0);
    const prevActive = usePrevious(active);

    useEffect(() => {
        loadSound.play();
        backgroundMusic.play();
    }, []);

    const navigate = (index) => {
        if (index === active) {
            return;
        }
        navigateSound.play();
        setActive(index);
    };

    const textOffsetX = CARDS_OFFSET_X + ACTIVE_CARD_SIZE + ACTIVE_CARD_GAP + 12;
    const textOffsetY = ACTIVE_CARD_SIZE * 0.78 + CARDS_OFFSET_Y;
    const isNext = active > (prevActive ?? 0);

    return (
        <div className='ps5-container' style={
            {
                '--active-card-size': `${ACTIVE_CARD_SIZE}px`,
                '--card-size': `${CARD_SIZE}px`,
            }
        }>
            <CrossFader destroyOnFadeOutComplete={false} className={'game-bg-container ' + (isNext ? 'next' : 'prev')}>
                <div className='game-bg' style={{ backgroundImage: `url("${games[active].bg ?? games[active].logo}")` }}>
                </div>
            </CrossFader>

            <div className='games-list-container'>
                <GameCardsList games={games} activeIndex={active} onActiveIndexChange={navigate} />
            </div>

            <div className='game-card-title'
                 style={{ position: 'absolute', transform: `translateX(${textOffsetX}px) translateY(${textOffsetY}px)` }}>
                <CrossFader><span>{games[active].name}</span></CrossFader>
            </div>

            <CrossFader className='play-container' style={{ left: `${CARDS_OFFSET_X * 1.2}px` }}>
                <h1>{games[active].name}</h1>
                <button className='play-btn'>Play</button>
            </CrossFader>
        </div>
    );
}

export default App;