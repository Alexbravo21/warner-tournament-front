import {useEffect, useState} from 'preact/hooks'
import { GAMING_CONSOLE, USER_ID } from '../utils/constants';

export const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  });
  return matches;
};

export const useGetUserId = (gamingConsole: string | null): string => {
    switch(gamingConsole){
        case GAMING_CONSOLE.PC:
            return USER_ID.USER_ID;
        case GAMING_CONSOLE.PS4:
            return USER_ID.PSN_ID;
        case GAMING_CONSOLE.PS5:
            return USER_ID.PSN_ID;
        case GAMING_CONSOLE.XBOX_ONE:
            return USER_ID.GAMERTAG;
        case GAMING_CONSOLE.XBOX_SERIES:
            return USER_ID.GAMERTAG;
        default: return USER_ID.GAMER_ID;
    }
}