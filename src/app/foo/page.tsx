"use client";

import { useEffect } from "react";

import { useLayoutContext } from "~/context/layout.tsx";
import { useFoo, useUpdateFoo } from "~/hooks/foo.ts";

export default function Page() {
    const { setTitle } = useLayoutContext();
    const { data, isLoading, isValidating } = useFoo();
    const { trigger, isMutating } = useUpdateFoo();

    useEffect(() => {
        setTitle("foo");
    }, []);

    return (
        <div>
            <h1>Page</h1>
            <button disabled={isMutating || isLoading || isValidating} onClick={() => trigger({ id: "hoge" })}>
                Send
            </button>
            <div style={{ whiteSpace: "pre" }}>{JSON.stringify(data, null, 4)}</div>
        </div>
    );
}
