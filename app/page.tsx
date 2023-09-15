'use client'
import { useCallback, useEffect, useLayoutEffect } from 'react'
import Edit from './_components/edit/Edit'
import Preview from './_components/preview/Preview'
import Sidebar from './_components/sidebar/Sidebar'
import { useThemeContext } from './_contexts/theme-context'

const Container = ({ children }: { children: JSX.Element[] }) => {
	const { theme, setTheme } = useThemeContext()
	return (
		<div
			className={`${
				theme === 'light' ? 'bg-slate-500' : 'bg-slate-900'
			} flex w-screen h-screen font-mono`}>
			{children}
		</div>
	)
}

export default function Home() {
	return (
		<Container>
			<Sidebar />
			<Edit />
			<Preview />
		</Container>
	)
}
