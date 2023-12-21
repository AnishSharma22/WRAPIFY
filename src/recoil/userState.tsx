
import { atom } from "recoil";



export const userState = atom({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: {} // default value (aka initial value)
});
export const artistState = atom({
    key: 'artistState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
export const trackState = atom({
    key: 'trackState', // unique ID (with respect to other atoms/selectors)
    default: [] // default value (aka initial value)
});

export const boolState = atom({
    key:'boolState',
    default: false
})


