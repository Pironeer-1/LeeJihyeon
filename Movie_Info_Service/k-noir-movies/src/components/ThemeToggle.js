import React from 'react';
import {Sun, Moon} from 'lucide-react';
import {useTheme} from '../hooks/useTheme';

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
            {theme === 'light' ? <Moon size={20}/> : <Sun size={20}/>}
        </button>
    );
};

export default ThemeToggle;