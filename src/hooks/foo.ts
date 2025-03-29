import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { fetcher, post } from "~/lib/fetcher.ts";

interface FooResponse {
    status: string;
}

const fallbackData: FooResponse = {
    status: "ok",
};

export function useFoo() {
    return useSWR(
        "foo",
        (key: string, ...args: unknown[]) => {
            console.log(key, ...args);
            return fetcher<FooResponse>("/foo");
        },
        { fallbackData },
    );
}

interface UpdateFooArgs {
    id?: string;
}

interface UpdateFooResponse {
    status: string;
}

export function useUpdateFoo() {
    return useSWRMutation<any, any, string, UpdateFooArgs, UpdateFooResponse>(
        "foo",
        (_key, { arg }) => {
            return post<UpdateFooArgs, UpdateFooResponse>("/foo", arg);
        },
    );
}
