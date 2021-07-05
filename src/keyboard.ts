import React from "react";

// See https://usehooks.com/useEventListener/
export function useEventListener(eventName: any, handler: any, element = window) {
    const savedHandler = React.useRef();

    React.useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    React.useEffect(() => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        const eventListener = (event: any) => {
            if (savedHandler) {
                const c: any = savedHandler.current;
                if (c && event) {
                    c(event);
                }
            }
        }

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}

export const useCtrl = () => {
    const [ctrl, setCtrl] = React.useState(false);

    const keyHandler = ({ ctrlKey }: { ctrlKey: any }) => {
        setCtrl(ctrlKey);
    };

    useEventListener("keydown", keyHandler);
    useEventListener("keyup", keyHandler);

    return ctrl;
};