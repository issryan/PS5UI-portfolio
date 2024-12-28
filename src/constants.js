// Check screen width and set constants dynamically
const isMobile = window.innerWidth <= 768;

export const CARD_SIZE = isMobile ? 80 : 128; 
export const ACTIVE_CARD_SIZE = isMobile ? 150 : 220; 
export const CARD_GAP = isMobile ? 8 : 10; 
export const ACTIVE_CARD_GAP = isMobile ? 12 : 20; 
export const CARDS_OFFSET_Y = isMobile ? 100 : 128;
export const CARDS_OFFSET_X = (CARD_SIZE + CARD_GAP) * 1.3;