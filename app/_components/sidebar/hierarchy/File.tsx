import { useFileContext } from '@/app/_contexts/file-context'
import { FileIcon } from '../../icons/File'
import { HierarchyData } from './types'

const File = ({ item }: { item: HierarchyData }) => {
	const { setActiveFile } = useFileContext()

	return (
		<ul className='ml-5'>
			<li>
				<div
					className='flex w-full cursor-pointer hover:underline'
					onClick={() => setActiveFile(item.filename)}>
					<div>
						<FileIcon />
					</div>
					<div>{item.name}</div>
				</div>
			</li>
		</ul>
	)
}

export default File
