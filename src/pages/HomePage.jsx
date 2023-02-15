import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

import whiteNoiseUrl from '@/assets/audio/white-noise.ogg';

const HomePage = () => {
    const audio = useMemo(() => {
        const element = new Audio(whiteNoiseUrl);
        element.loop = true;
        return element;
    }, []);
    const [paused, setPaused] = useState(audio.paused);

    const togglePlay = async () => {
        if (audio.paused) {
            await audio.play();
            setPaused(false);
        } else {
            audio.pause();
            setPaused(true);
        }
    };

    return (
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton size="large" sx={{ background: '#9900ff' }} onClick={togglePlay}>
                {
                    paused
                        ? <PlayIcon />
                        : <StopIcon />
                }
            </IconButton>
        </Box>
    );
};

export default HomePage;
