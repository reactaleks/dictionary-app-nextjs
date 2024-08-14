'use client'

import { ThemeProvider } from 'next-themes';
import { useContext } from 'react';
import { FontContext } from './ContextProviders';
export function ThemeSwitchProvider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
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