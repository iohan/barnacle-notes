import getFileContent from '@/app/_actions/get-file-content'
import { useFileContext } from '@/app/_contexts/file-context'
import { useCallback, useEffect } from 'react'
import TextArea from './TextArea'

const Edit = () => {
	const { activeFile, setActiveFileContent } = useFileContext()

	const readFile = useCallback(
		async (file: string) => {
			const data = await getFileContent(file)
			if (data?.error) {
				alert(data.error)
			}

			setActiveFileContent(data.content ?? '')
		},
		[setActiveFileContent]
	)

	useEffect(() => {
		if (activeFile) {
			readFile(activeFile)
		}
	}, [activeFile, readFile])

	return (
		<div className='basis-1/2 bg-slate-300 border-r-2 border-slate-400/50'>
			<TextArea />
		</div>
	)
}

export default Edit
