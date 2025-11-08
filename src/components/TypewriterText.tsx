import { useEffect, useState } from 'react';

interface TypewriterTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export function TypewriterText({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className = '',
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (charIndex < currentText.length) {
                    setDisplayedText(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (charIndex > 0) {
                    setDisplayedText(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Move to next text
                    setIsDeleting(false);
                    setCurrentIndex((currentIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {displayedText}
            <span className="inline-block w-0.5 h-[0.9em] bg-current ml-1 animate-blink align-middle" />
        </span>
    );
}