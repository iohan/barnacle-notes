import { useFileContext } from '@/app/_contexts/file-context'
import { marked } from 'marked'

const Preview = () => {
  const { activeFileContent } = useFileContext()

	return (
		<div
			className='editor basis-1/2 bg-slate-100 text-slate-800 p-5 overflow-auto'
			dangerouslySetInnerHTML={{ __html: marked.parse(activeFileContent) }}
		/>
	)
}

export default Preview
