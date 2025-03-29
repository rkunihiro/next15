"use client";

import { type PropsWithChildren, Suspense } from "react";

import { Footer } from "~/components/footer.tsx";
import { Header } from "~/components/header.tsx";
import { Loading } from "~/components/loading.tsx";
import { LayoutProvider } from "~/context/layout.tsx";

export default function Template({ children }: PropsWithChildren) {
    return (
        <Suspense fallback={<Loading />}>
            <LayoutProvider>
                <Header />
                <main>{children}</main>
                <Footer />
            </LayoutProvider>
        </Suspense>
    );
}
