import { forwardRef } from 'react';
import './GameCard.scss';

export const GameCard = forwardRef(
    function GameCard({ logo, name, active, ...props }, ref) {
        return (
            <div ref={ref} {...props} className={`game-card ${active ? 'active' : ''}`}>
                {active && <div className='animated-border'></div>}
                <div className='game-card-img'>
                    <img src={logo} alt={name} />
                </div>
            </div>
        )
    }
);