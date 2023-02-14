import { useMemo } from 'react';

const HomePage = () => {
    const audio = useMemo(() => {
        const element = new Audio('/audio/white-noise.ogg');
        element.loop = true;
        return element;
    });

    const togglePlay = () => {
        if (audio.paused) {
            console.log('play');
            audio.play();
        } else {
            console.log('pause');
            audio.pause();
        }
    };

    return (
        <>
            <div>HomePage</div>
            <button onClick={togglePlay}>Toggle</button>
        </>
    );
};

export default HomePage;
