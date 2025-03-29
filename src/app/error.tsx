"use client";

interface Props {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error }: Props) {
    return (
        <>
            <h1>Error</h1>
            <div>{error ? error.message : "Something went wrong"}</div>
        </>
    );
}
