import { useCallback, useEffect, useReducer } from "react";

type MutationState<T> = {
    loading: boolean;
    error: Error | null;
    data: T | null;
};

type MutationOptions = {
    onSuccess?: (data: any) => void;
    onError?: (error: Error) => void;
};

type Action<T> =
    | { type: "LOADING" }
    | { type: "ERROR"; payload: Error }
    | { type: "SUCCESS"; payload: T };

const reducer = <T extends any>(
    state: MutationState<T>,
    action: Action<T>
): MutationState<T> => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true, error: null };
        case "ERROR":
            return { ...state, loading: false, error: action.payload };
        case "SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            };
        default:
            return state;
    }
};

export const useMutation = (
    fn: (options?: any) => Promise<any>,
    options?: MutationOptions
) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        error: null,
        data: null,
    });

    const mutate = useCallback(
        async (params: any) => {
            dispatch({ type: "LOADING" });
            try {
                const response = await fn(params);
                dispatch({ type: "SUCCESS", payload: response });
                options?.onSuccess?.(response);
            } catch (error: any) {
                dispatch({ type: "ERROR", payload: error });
                options?.onError?.(error);
            }
        },
        [fn]
    );

    useEffect(() => {
        return () => {
            dispatch({ type: "LOADING" });
            dispatch({ type: "SUCCESS", payload: null });
        };
    }, []);

    return { ...state, mutate };
};
