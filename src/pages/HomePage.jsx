import { useEffect, useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import brownNoise from '~/assets/audio/brown-noise.ogg';
import pinkNoise from '~/assets/audio/pink-noise.ogg';
import purpleNoise from '~/assets/audio/purple-noise.ogg';
import whiteNoise from '~/assets/audio/white-noise.ogg';
import { COLORS } from '~/theme';
import { createLazy } from '~/utils';

const METADATA = [
    {
        url: brownNoise,
        title: 'Brown noise',
        color: COLORS.BROWN,
    },
    {
        url: pinkNoise,
        title: 'Pink noise',
        color: COLORS.PINK,
    },
    {
        url: purpleNoise,
        title: 'Purple noise',
        color: COLORS.PURPLE,
    },
    {
        url: whiteNoise,
        title: 'White noise',
        color: COLORS.WHITE,
    },
];

const HomePage = () => {
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ audioData, setAudioData ] = useState(null);
    const [ audioNode, setAudioNode ] = useState(null);
    const [ currIndex, setCurrIndex ] = useState(0);

    const audioContext = useMemo(() => createLazy(() => new (window.AudioContext ?? window.webkitAudioContext)()), []);

    useEffect(() => {
        Promise
            .all(METADATA.map((track) => preload(track.url)))
            .then((data) => setAudioData(data));
    }, []);

    async function preload(url) {
        const resp = await fetch(url, { mode: 'cors' });
        const buff = await resp.arrayBuffer();
        return createLazy(() => audioContext.value.decodeAudioData(buff));
    }

    async function togglePlay() {
        if (audioContext.value.state === 'suspended') {
            audioContext.value.resume();
        }
        if (isPlaying) {
            stop();
        } else {
            await play();
        }
    }

    async function play(index = currIndex) {
        const source = audioContext.value.createBufferSource();
        source.buffer = await audioData[index].value;
        source.connect(audioContext.value.destination);
        source.loop = true;
        source.start();
        setAudioNode(source);
        setIsPlaying(true);
    }

    function stop() {        
        audioNode.stop();
        audioNode.disconnect();
        setAudioNode(null);
        setIsPlaying(false);
    }

    async function selectNext(nextIndex) {
        if (nextIndex != currIndex) {
            setCurrIndex(nextIndex);
            if (isPlaying) {
                stop();
                await play(nextIndex);
            }
        }
    }

    return (
        <Box sx={{ pb: 8 }}>
            <List>
                {METADATA.map(({ title, color }, index) => (
                    <ListItem key={index}>
                        <ListItemButton onClick={() => selectNext(index)} selected={currIndex === index}>
                            <ListItemIcon>
                                <EqualizerIcon color={color} />
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, p: 1 }} elevation={3}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
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
                </Stack>
            </Paper>
        </Box>
    );
};

export default HomePage;
