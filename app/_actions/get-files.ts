'use server'

import fs from 'fs'
import { HierarchyData } from '../_components/sidebar/hierarchy/types'

const getFiles = async (dir?: string) => {
	if (!dir) dir = 'storage'

	const fileStructure: HierarchyData[] = []
	const files = fs.readdirSync(dir)

	files.forEach(file => {
		const parts = file.replace(/\.[^/.]+$/, '').split('.')
		let currentNode = fileStructure

		for (const part of parts) {
			const existingNode = currentNode.find(node => node.name === part)

			if (existingNode) {
				currentNode = existingNode.children
			} else {
				const newNode: HierarchyData = {
					name: part,
					filename: `${parts.join('.')}.md`,
					children: []
				}
				currentNode.push(newNode)
				currentNode = newNode.children
			}
		}
	})

	return fileStructure
}

export default getFiles
