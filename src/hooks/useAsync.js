import { useState, useEffect, useCallback } from 'react'

export function useAsync(func, dependencies) {
    const { execute, ...state } = useAsyncInternal(func, dependencies, true)

    useEffect(() => {
        execute()
    }, [execute])

    return state
}

export function useAsyncNoLoading(func, dependencies) {
    return useAsyncInternal(func, dependencies, false)
}

function useAsyncInternal(func, dependencies, initialState) {
    const [loading, setLoading] = useState(initialState);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const execute = useCallback(
        (...params) => {
            setLoading(true);
            return func(...params)
                .then((res) => {
                    setData(res);
                    setError(undefined);
                    return res;
                })
                .catch((err) => {
                    setError(err);
                    setData(undefined);
                })
                .finally(() => setLoading(false));
        },
        // Add func to the dependency array
        dependencies
    );

    return { loading, error, data, execute };
}