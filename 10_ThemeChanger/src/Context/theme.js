import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",        //These are the values ehich are assessible with the provider
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}