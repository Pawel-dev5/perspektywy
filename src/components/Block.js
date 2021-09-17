import { useState, useEffect } from "react"

export const Block = () => {
    const [color, setColor] = useState("#ccc")
    const [count, setCount] = useState(0)

    const changeColor = () => {
        if (count < 3) {
            return (
                setColor('#00ff00'),
                setCount(count + 1)
            )
        } else return (
            setColor('#ff0000'),
            setCount(0)
        )
    }
    useEffect(() => {
        setInterval(() => {
            setColor("#ccc")
        }, 2000);
    }, [])
    return (
        <div className="App">
            <div className="Block" style={{ backgroundColor: color }} onClick={changeColor}>
            </div>
        </div>
    )
}