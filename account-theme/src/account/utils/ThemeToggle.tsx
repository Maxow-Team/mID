import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
    // 1. Начальное определение темы
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window === "undefined") return "light";
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    // 2. Применение темы к DOM
    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Сохраняем актуальное состояние

        if (theme === "dark") {
            root.classList.add('pf-v5-theme-dark');
        } else {
            root.classList.remove('pf-v5-theme-dark');
        }
    }, [theme]);

    // 3. СЛУШАТЕЛЬ СИСТЕМЫ: Теперь он всегда меняет тему
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemChange = (event: MediaQueryListEvent) => {
            const newTheme = event.matches ? "dark" : "light";
            // Прямо обновляем стейт. Теперь не важно, нажимал ли ты кнопку раньше.
            setTheme(newTheme);
        };

        mediaQuery.addEventListener("change", handleSystemChange);
        return () => mediaQuery.removeEventListener("change", handleSystemChange);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div onClick={toggleTheme} style={{paddingBottom: "7px"}}>
            {theme === "light" ? (
                <>
                    <Moon size={20}/>
                    <span>Тёмная тема</span>
                </>
            ) : (
                <>
                    <Sun size={20}/>
                    <span>Светлая тема</span>
                </>
            )}
        </div>
    );
};