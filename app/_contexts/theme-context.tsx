'use client'

import React, {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useState
} from 'react'

type ThemeContextProviderProps = {
	children: ReactNode
}

type ThemeContext = {
	theme: string
	setTheme: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContext | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState('light')
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeContextProvider')
	}

	return context
}

export default ThemeContextProvider
