import {useEffect, useRef} from 'react';



// TYPE
interface useIntervalType {
    (callback: () => void, delay: number) : void
}

const useInterval : useIntervalType = (callback, delay) => {
    const savedCallback = useRef<(() => void) | null> (null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);


    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current()
            }
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


export default useInterval;