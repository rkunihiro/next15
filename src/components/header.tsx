import { useLayoutContext } from "~/context/layout.tsx";

export function Header() {
    const { title } = useLayoutContext();
    return (
        <header>
            <h1>SiteName {title ? `| ${title}` : ""}</h1>
        </header>
    );
}
