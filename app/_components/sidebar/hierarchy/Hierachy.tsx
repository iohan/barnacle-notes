import { FileIcon } from '../../icons/File'
import { FolderIcon } from '../../icons/Folder'
import Directory from './Directory'
import File from './File'
import { HierarchyData } from './types'

const Hierachy = (props: { data: HierarchyData[] }) => {
	const { data } = props

	return (
		<>
			{data.map((item, index) =>
				item.children.length > 0 ? (
					<Directory key={index} items={item} />
				) : (
					<File key={index} item={item} />
				)
			)}
		</>
	)
}

export default Hierachy
