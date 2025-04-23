import { useEffect, useState, useRef } from "react";
import { useStore } from "../../store/store";

const Timer = () => {
    const intervalId = useRef<ReturnType<typeof setInterval> | null>(null)
    const [timer, setTimer] = useState<number>(0)
    const { isActive } = useStore()

    useEffect(() => {
        if (isActive) {
            intervalId.current = setInterval(() => {
                setTimer(prevState => prevState + 1)
            }, 1000)
        } else {
            clearInterval(intervalId.current!)
            intervalId.current = null
        }
    }, [isActive])

    useEffect(() => {
        if (!isActive) {
            setTimer(0)
        }

    }, [isActive])

    return (
        <div>Timer: {timer}</div>
    )
}

export default Timer