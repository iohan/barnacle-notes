import { Hotkeys } from './_contexts/hotkeys-context'

const keys: Hotkeys = [
	{
		key: {
			Windows: ['Ctrl', 'f'],
			Mac: ['Ctrl', 'f']
		},
		label: 'Create new files',
		callback: () => console.log('Create new files')
	}
]

export default keys
