'use client'

import { useRef, type KeyboardEvent } from 'react'

type TextInputProps = {
	onEnter: (file: string) => void
	autoFocus?: boolean
}

const TextInput = (props: TextInputProps) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			props.onEnter(inputRef.current?.value || '')
		}
	}

	return (
		<input
			type='text'
			ref={inputRef}
			autoFocus={props.autoFocus}
			onKeyDown={e => Boolean(props.onEnter) && onKeyDown(e)}
		/>
	)
}

export default TextInput
