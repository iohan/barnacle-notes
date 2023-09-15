'use client'
import { useState } from 'react'
import { FolderIcon } from '../../icons/Folder'
import Hierachy from './Hierachy'
import { HierarchyData } from './types'

const Directory = ({ items }: { items: HierarchyData }) => {
	const [open, setOpen] = useState(false)
	return (
		<ul className='ml-5'>
			<li className='font-bold'>
				<div className='flex w-full cursor-pointer hover:underline' onClick={() => setOpen(!open)}>
					<div>
						<FolderIcon />
					</div>
					<div>{items.name}</div>
				</div>
			</li>
			{items.children.length > 0 && open && <Hierachy data={items.children} />}
		</ul>
	)
}

export default Directory
