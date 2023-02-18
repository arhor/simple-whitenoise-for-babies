import { useEffect, useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

import whiteNoiseUrl from '~/assets/audio/white-noise.ogg';

const HomePage = () => {
    const context = useMemo(() => new (window.AudioContext ?? window.webkitAudioContext)(), []);
    const [ loaded, setLoaded ] = useState(false);
    const [ paused, setPaused ] = useState(true);
    const [ data, setData ] = useState(null);
    const [ node, setNode ] = useState(null);

    // Load some audio (CORS need to be allowed or we won't be able to decode the data)
    useEffect(() => {
        fetch(whiteNoiseUrl, { mode: 'cors' })
            .then((resp) => resp.arrayBuffer())
            .then((buff) => context.decodeAudioData(buff))
            .then((data) => {
                setData(data);
                setLoaded(true);
            });

        return () => {
            // disposer
        };
    }, [/* dependencies */])

    // Sets up a new source node as needed as stopping will render current invalid
    function play() {
        const bufferSource = context.createBufferSource(); // create audio source
        bufferSource.buffer = data;                        // use decoded buffer
        bufferSource.connect(context.destination);         // create output
        bufferSource.loop = true;                          // takes care of perfect looping
        bufferSource.start();                              // play...
        setNode(bufferSource);
        setPaused(false);
        console.log('play');
    }

    function stop() {
        node.stop();
        setNode(null);
        setPaused(true);
        console.log('stop');
    }

    const togglePlay = async () => {
        if (paused) {
            play();
        } else {
            stop();
        }
    };

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {loaded && (
                <IconButton
                    size="large"
                    sx={{ background: '#9900ff' }}
                    onClick={togglePlay}
                    aria-label="toggle white noise"
                >
                    {
                        paused
                            ? <PlayIcon />
                            : <StopIcon />
                    }
                </IconButton>
            )}
        </Box>
    );
};

export default HomePage;
