import React, { useEffect, useState } from 'react';

function Typewriter({ texts, period }) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[index].substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }, period / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(texts[index].substring(0, displayedText.length + 1));
        if (displayedText === texts[index]) {
          setIsDeleting(true);
          timeout = setTimeout(() => {}, period);
        }
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, texts, period]);

  return <span className="wrap">{displayedText}</span>;
}

export default Typewriter;
