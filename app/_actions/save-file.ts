'use server'

import fs from 'fs'
import path from 'path'

const saveFile = async (file: string, content: string) => {
	try {
		const fd = fs.writeFileSync(path.join('storage', file), content)

		return { success: true }
	} catch (err) {
		return { error: `Can't save file (${file})` }
	}
}

export default saveFile
