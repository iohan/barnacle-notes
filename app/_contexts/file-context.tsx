'use client'

import { createContext, useContext, useState } from 'react'
import { HierarchyData } from '../_components/sidebar/hierarchy/types'

type FileContextProverProps = {
	children: React.ReactNode
}

type FileContextType = {
	activeFile: string
	setActiveFile: React.Dispatch<React.SetStateAction<string>>
	activeFileContent: string
	setActiveFileContent: React.Dispatch<React.SetStateAction<string>>
	fileStructure: HierarchyData[]
	setFileStructure: React.Dispatch<React.SetStateAction<HierarchyData[]>>
}

const FileContext = createContext<FileContextType | null>(null)

const FileContextProvider = ({ children }: FileContextProverProps) => {
	const [activeFile, setActiveFile] = useState('')
	const [activeFileContent, setActiveFileContent] = useState('')
	const [fileStructure, setFileStructure] = useState<HierarchyData[]>([])

	return (
		<FileContext.Provider
			value={{
				activeFile,
				setActiveFile,
				activeFileContent,
				setActiveFileContent,
				fileStructure,
				setFileStructure
			}}>
			{children}
		</FileContext.Provider>
	)
}

export const useFileContext = () => {
	const context = useContext(FileContext)

	if (!context) {
		throw new Error('useFileContext must be used within a FileContextProvider')
	}

	return context
}

export default FileContextProvider
