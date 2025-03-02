"use client";

import useSWR from "swr";

async function fetcher<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return res.json();
}

interface Data {
    id: string;
    name: string;
}

function List() {
    const { data, isLoading } = useSWR("/list.json", fetcher<Data[]>);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {data?.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
            })}
        </ul>
    );
}

export default function Page() {
    return (
        <div>
            <h1>Page</h1>
            <List />
        </div>
    );
}
