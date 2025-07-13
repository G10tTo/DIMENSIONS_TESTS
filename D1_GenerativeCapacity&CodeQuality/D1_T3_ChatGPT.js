// Generate a custom React usePrevious hook
import { useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Example usage
// function MyComponent({ count }) {
//   const prevCount = usePrevious(count);
//   return (
//     <div>
//       <p>Current: {count}</p>
//       <p>Previous: {prevCount}</p>
//     </div>
//   );
// }

