'use client'

import { useContext } from 'react';
import { FontContext, ThemeContext } from './ContextProviders';

export function ThemeSwitchProvider({ children }: { children: React.ReactNode }) {

	return (
		<div>
			{children}
		</div>
	);
}

export function FontsSwitchProvider({ children }: { children: React.ReactNode }) {
	const {fontFamily} = useContext(FontContext)
	return (
		<div className={`${fontFamily}`}>
			{children}
		</div>
	);
}

