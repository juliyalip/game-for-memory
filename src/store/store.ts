import { create } from 'zustand'
import { Option, options, extraOption } from '../data/data'
import { mixCards , createOptions} from '../helpers/helpers';

interface StoreState {
    cards: Option[];
    selectedCards: Option[],
    level: 1 | 2;
    setLevel: (value: 1 | 2) => void;
    isActive: boolean;
    setIsActive: (value: boolean) => void,
    compareCards: () => void,
    remixCards: () => void,
    checkCard: (id: Option['id']) => void
}

export const useStore = create<StoreState>((set, get) => ({
    cards: mixCards(createOptions(options)),
    selectedCards: [],
    isActive: false,
    isChecking: false,
    level: 1,
    setLevel: (value) => {
        set({ level: value });
        get().remixCards();
    },

    setIsActive: (value: boolean) => set({ isActive: value }),

    remixCards: () => {
        const {level } = get()
        const newCards = level === 1 ? mixCards(createOptions(options)) : mixCards(createOptions([...options, ...extraOption]));

        set({
            cards: newCards,
            selectedCards: [],
        });
    },

    compareCards: () => set((state) => {
        const isCompered = state.selectedCards[0].label === state.selectedCards[1].label;

        const comparedCards = state.cards.map((card) => {
            if (card.id === state.selectedCards[0].id || card.id === state.selectedCards[1].id) {
                return isCompered
                    ? { ...card, removed: true }
                    : { ...card, checked: false };
            }
            return card;
        });

        return {
            cards: comparedCards,
            selectedCards: [],
        };
    }),


    checkCard: (id: string) => set((state) => {
        const isDuplicate = state.selectedCards.find((card) => card.id === id);

        const refreshSelectedCards = isDuplicate
            ? state.selectedCards.filter((card) => card.id !== id) : [...state.selectedCards, state.cards.find((card) => card.id === id)!]

        return {
            cards: state.cards.map((card) => card.id === id ? { ...card, checked: !card.checked } : card),
            selectedCards: refreshSelectedCards,
        };
    }),

}));