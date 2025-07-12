// Generate a custom React usePrevious hook

import { useEffect, useRef } from 'react';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}



// Example usage:
// const prevCount = usePrevious(count);
// This will give you the previous value of `count` on the next render
