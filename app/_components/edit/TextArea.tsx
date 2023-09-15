'use client'
import saveFile from '@/app/_actions/save-file'
import { useFileContext } from '@/app/_contexts/file-context'
import { ChangeEvent } from 'react'

const TextArea = () => {
	const { activeFile, activeFileContent, setActiveFileContent } = useFileContext()

	const onChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
		setActiveFileContent(e.target.value)
		const { success, error } = await saveFile(activeFile, e.target.value)
		console.log(success, error)
	}

	return (
		<textarea
			className='w-full h-full focus:outline-none border-none bg-slate-300 text-slate-900 p-5 resize-none overflow-auto'
			value={activeFileContent}
			onChange={onChange}
		/>
	)
}

export default TextArea
