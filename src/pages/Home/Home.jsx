import './Home.scss';
import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { CrossFader } from 'react-cross-fader';
import { GameCardsList } from "../../GameCardsList/GameCardsList";
import { ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_SIZE, CARDS_OFFSET_X, CARDS_OFFSET_Y } from "../../constants";
import { games } from "../../games";
import { usePrevious } from "../../hooks/use-previous";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Navbar from '../Navbar/Navbar';
import BingeBuddy from '../Projects/BingeBuddy/BingeSummary';
import BreedFinder from '../Projects/BreedFinder/BreedSummary';

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
        if (index === active) return;
        navigateSound.play();
        setActive(index);
    };

    const textOffsetX = CARDS_OFFSET_X + ACTIVE_CARD_SIZE + ACTIVE_CARD_GAP + 12;
    const textOffsetY = ACTIVE_CARD_SIZE * 0.78 + CARDS_OFFSET_Y;
    const isNext = active > (prevActive ?? 0);

    return (
        <div className='ps5-container' style={{
            '--active-card-size': `${ACTIVE_CARD_SIZE}px`,
            '--card-size': `${CARD_SIZE}px`,
        }}>
            {/* Video Background */}
            <video 
                className="background-video" 
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src="/videos/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Navbar */}
            <Navbar />

            {/* Crossfader Background */}
            <CrossFader destroyOnFadeOutComplete={false} className={'game-bg-container ' + (isNext ? 'next' : 'prev')}>
                <div className='game-bg' style={{ backgroundImage: `url("${games[active].bg ?? games[active].logo}")` }}></div>
            </CrossFader>

            {/* Game List */}
            <div className='games-list-container'>
                <GameCardsList games={games} activeIndex={active} onActiveIndexChange={navigate} />
            </div>

            {/* Game Title */}
            <div className='game-card-title'
                style={{ position: 'absolute', transform: `translateX(${textOffsetX}px) translateY(${textOffsetY}px)` }}>
                <CrossFader><span>{games[active].name}</span></CrossFader>
            </div>

            {/* Dynamic Content */}
            <div className="dynamic-content">
                {games[active].name === 'About' && (
                    <div className="dynamic-section">
                        <About />
                    </div>
                )}
                {games[active].name === 'Gallery' && (
                    <div className="dynamic-section">
                        <Gallery />
                    </div>
                )}
                {games[active].name === 'BingeBuddy' && (
                    <div className="dynamic-section">
                        <BingeBuddy/>
                    </div>
                )}
                {games[active].name === 'Breed Finder' && (
                    <div className="dynamic-section">
                        <BreedFinder/>
                    </div>
                )}
                {games[active].name === 'Flick' && (
                    <div className="dynamic-section">
                        <h2>Flick</h2>
                        <p>A social media app connecting people through shared moments.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;