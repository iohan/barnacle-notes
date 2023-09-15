import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeContextProvider from './_contexts/theme-context'
import FileContextProvider from './_contexts/file-context'
import HotkeysContextProvider from './_contexts/hotkeys-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeContextProvider>
					<HotkeysContextProvider>
						<FileContextProvider>{children}</FileContextProvider>
					</HotkeysContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	)
}
