const apiBaseUrl = process.env["NEXT_PUBLIC_API_BASE_URL"] ?? "";

export async function fetcher<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${apiBaseUrl}${path}`, init);
    return res.json();
}

export async function post<Data extends any, T extends object>(path: string, data: Data): Promise<T> {
    return fetcher(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
    });
}
