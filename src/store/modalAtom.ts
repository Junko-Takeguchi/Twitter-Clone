import { atom } from 'recoil';

export const loginModalAtom = atom({
    key: 'loginModalAtom',
    default: {
        isOpen: false,
    },
});

export const registerModalAtom = atom({
    key: 'registerModalAtom',
    default: {
        isOpen: false,
    },
});
