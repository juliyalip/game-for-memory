import { useState, useEffect, use } from "react";
import { useStore } from '../../store/store'

const Attempt = () => {
    const [attempt, setAttempt] = useState(0)
    const { selectedCards, compareCards, isActive } = useStore()

    const isChecking = selectedCards.length === 2

    useEffect(() => {
        if (isChecking) {
            setTimeout(() => {
                compareCards()
                setAttempt(state => state + 1)
            }, 1000)
        }
    }, [isChecking, compareCards])

    useEffect(() => {
        if (!isActive) {
            setAttempt(0)
        }
    }, [isActive])

    return (
        <div>Attempt: {attempt}</div>
    )

}

export default Attempt