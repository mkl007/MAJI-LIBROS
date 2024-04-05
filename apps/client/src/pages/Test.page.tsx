import { createContext, useContext, useState } from "react";

type Theme = 'light' | 'dark' | 'system';
const themeContext = createContext<Theme>('system');

const useGetTheme = () => useContext(themeContext)

export function TestingPage() {
  const [theme, setTheme] = useState<Theme>('system');
  
  return(
    <
  )

}