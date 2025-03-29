import { createContext, type PropsWithChildren, use, useState } from "react";

interface LayoutContextType {
    title: string;
    setTitle(v: string): void;
}

export const LayoutContext = createContext<LayoutContextType>({ title: "", setTitle: () => {} });

export function LayoutProvider({ children }: PropsWithChildren) {
    const [title, setTitle] = useState<string>("");
    return <LayoutContext.Provider value={{ title, setTitle }}>{children}</LayoutContext.Provider>;
}

export function useLayoutContext() {
    return use(LayoutContext);
}
