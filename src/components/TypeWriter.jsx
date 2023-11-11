import  { useState, useEffect } from 'react';

function TypeWriter({ text, delay }) {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, delay, text])
        
    return (
        <span>{currentText}</span>
    )
}

export default TypeWriter