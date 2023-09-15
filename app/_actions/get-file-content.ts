'use server'

import fs from 'fs'
import path from 'path'

const getFileContent = async (file: string) => {
	try {
		const fd = fs.readFileSync(path.join('storage', file))

		return { content: fd.toString() }
	} catch (err) {
		return { error: `Can't open file (${file})` }
	}
}

export default getFileContent
