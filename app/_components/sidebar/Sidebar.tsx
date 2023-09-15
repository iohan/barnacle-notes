import { useCallback, useEffect, useState } from 'react'
import Hierachy from './hierarchy/Hierachy'
import { HierarchyData } from './hierarchy/types'
import getFiles from '@/app/_actions/get-files'
import { useFileContext } from '@/app/_contexts/file-context'
import { useHotkeysContext } from '@/app/_contexts/hotkeys-context'
import TextInput from '../reusable/text-input/TextInput'

const Sidebar = () => {
	const { fileStructure, setFileStructure } = useFileContext()
	const { hotkeyFired, hotkeyCallback } = useHotkeysContext()

	const fetchData = useCallback(async () => {
		const data = await getFiles()
		if (data) setFileStructure(data)
	}, [setFileStructure])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	const saveFile = (file: string) => {
		console.log('save file: ', file, '.md')
	}

	return (
		<div className='w-[350px] bg-slate-200 text-slate-900 p-5 border-r-2 border-slate-400/50'>
			<Hierachy data={fileStructure} />
			{hotkeyFired === 'new-file' && (
				<div>
					<TextInput autoFocus onEnter={file => saveFile(file)} />
				</div>
			)}
			<div className='mt-5'>
				<h3 className='font-bold'>Hotkeys</h3>
				<ul className='text-xs flex flex-col gap-y-1'>
					<li className='flex items-center gap-x-2'>
						<div className='bg-slate-400 text-white px-1 py-1 rounded-md'>[Ctrl+Shift+F]</div>
						<div>Create new file</div>
					</li>
					<li className='flex items-center gap-x-2'>
						<div className='bg-slate-400 text-white px-1 py-1 rounded-md'>[Escape]</div>
						<div>Cancel</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
