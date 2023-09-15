'use client'
import { type ReactNode, useEffect, useState, createContext, useContext } from 'react'
import hotkeys from '../hotkeys'

type HotkeysContextProviderProps = {
	children: ReactNode
}

type HotkeysContext = {
	hotkeyFired: string
	hotkeyCallback: () => void
}

type Hotkey = { key: { Windows: string[]; Mac: string[] }; label: string; callback: () => void }
export type Hotkeys = Array<Hotkey | null>

const HotkeysContext = createContext<HotkeysContext | null>(null)

const HotkeysContextProvider = ({ children }: HotkeysContextProviderProps) => {
	const [hotkeyFired, setHotkeyFired] = useState('')
	const [hotkeyCallback, setHotkeyCallback] = useState(() => () => {})

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && hotkeyFired.length > 0) {
				setHotkeyFired('')
			}

			if (e.key === 'F' && e.ctrlKey && e.shiftKey) {
				console.log('Ctrl+Shift+F', 'New file')
				setHotkeyFired('new-file')
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [hotkeyFired])

	return (
		<HotkeysContext.Provider value={{ hotkeyFired, hotkeyCallback }}>
			{children}
		</HotkeysContext.Provider>
	)
}

export const useHotkeysContext = () => {
	const context = useContext(HotkeysContext)

	if (!context) {
		throw new Error('useHotkeysContext must be used within a HotkeysContextProvider')
	}

	return context
}

export default HotkeysContextProvider
