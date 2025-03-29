import type { PropsWithChildren } from "react";

import "./style.css";

export const metadata = {
    title: "title",
    description: "description",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ja">
            <body>
                {children}
            </body>
        </html>
    );
}
