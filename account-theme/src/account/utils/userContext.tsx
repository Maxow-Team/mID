import { createContext, useContext, useState, ReactNode } from "react";
import { UserRepresentation } from "../api/representations.ts";
import { getPersonalInfo } from "../api/methods.ts";
import { usePromise } from "./usePromise.ts";
import {useEnvironment} from "../../shared/keycloak-ui-shared";

interface UserContextType {
    user: UserRepresentation | null;
    refresh: () => Promise<void>;
    isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Добавляем проп context, чтобы не вызывать хук здесь
export const UserProvider = ({ children }: { children: ReactNode }) => {
    // 1. Вызываем хук ПРЯМО ЗДЕСЬ. Теперь он сработает!
    const context = useEnvironment();

    const [user, setUser] = useState<UserRepresentation | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // 2. Используем полученный context в запросах
    usePromise(
        signal => getPersonalInfo({ signal, context }),
        (data) => {
            setUser(data);
            setIsLoading(false);
        }
    );

    const refresh = async () => {
        const data = await getPersonalInfo({ context });
        setUser(data);
    };

    return (
        <UserContext.Provider value={{ user, refresh, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("useUser must be used within UserProvider");
    return ctx;
};