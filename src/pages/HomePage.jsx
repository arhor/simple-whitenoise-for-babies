import { useEffect, useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

import whiteNoiseUrl from '~/assets/audio/white-noise.ogg';

const HomePage = () => {
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ audioData, setAudioData ] = useState(null);
    const [ audioNode, setAudioNode ] = useState(null);

    const audioContext = useMemo(() => ({
        get value() {
            Object.defineProperty(this, 'value', {
                value: new (window.AudioContext ?? window.webkitAudioContext)(),
            });
            return this.value;
        },
    }), []);

    useEffect(() => {
        fetch(whiteNoiseUrl, { mode: 'cors' })
            .then((resp) => resp.arrayBuffer())
            .then((buff) => setAudioData({
                get value() {
                    Object.defineProperty(this, 'value', {
                        value: audioContext.value.decodeAudioData(buff),
                    });
                    return this.value;
                },
            }));
    }, []);

    const togglePlay = async () => {
        if (audioContext.value.state === 'suspended') {
            audioContext.value.resume();
        }
        if (isPlaying) {
            audioNode.stop();
            audioNode.disconnect();
            setAudioNode(null);
            setIsPlaying(false);
        } else {
            const source = audioContext.value.createBufferSource();
            source.buffer = await audioData.value;
            source.connect(audioContext.value.destination);
            source.loop = true;
            source.start();
            setAudioNode(source);
            setIsPlaying(true);
        }
    };

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {audioData && (
                <IconButton
                    size="large"
                    sx={{ background: '#9900ff' }}
                    onClick={togglePlay}
                    aria-label="toggle white noise"
                >
                    {
                        isPlaying
                            ? <StopIcon />
                            : <PlayIcon />
                    }
                </IconButton>
            )}
        </Box>
    );
};

export default HomePage;
