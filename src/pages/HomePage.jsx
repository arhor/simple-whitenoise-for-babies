import { useEffect, useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';

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

const METADATA = {
    
};

const messages = [
    {
        primary: 'Brown noise',
    },
    {
        primary: 'Pink noise',
    },
    {
        primary: 'Purple noise',
    },
    {
        primary: 'White noise',
    },
];


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HomePage = () => {
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ audioData, setAudioData ] = useState(null);
    const [ audioNode, setAudioNode ] = useState(null);
    const [ currIndex, setCurrIndex ] = useState(0);
    const audioContext = useMemo(() => createLazy(() => new (window.AudioContext ?? window.webkitAudioContext)()), []);

    async function preload(url) {
        const resp = await fetch(url, { mode: 'cors' });
        const buff = await resp.arrayBuffer();
        return createLazy(() => audioContext.value.decodeAudioData(buff));
    }

    useEffect(() => {
        Promise
            .all([brownNoise, pinkNoise, purpleNoise, whiteNoise].map((url) => preload(url)))
            .then((data) => setAudioData(data));
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
            source.buffer = await audioData[currIndex].value;
            source.connect(audioContext.value.destination);
            source.loop = true;
            source.start();
            setAudioNode(source);
            setIsPlaying(true);
        }
    };

    return (
        <Box sx={{
            pb: 7,
            // height: '100vh',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
        }}>
            {/* {audioData && (
                <Grid container justifyContent="space-around" alignItems="center" spacing={3} columns={4}>
                    <Grid item xs={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton size="large" sx={{ border: '1px solid' }} onClick={() => setCurrIndex(0)}>
                                <EqualizerIcon color={COLORS.BROWN} />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton size="large" sx={{ border: '1px solid' }} onClick={() => setCurrIndex(1)}>
                                <EqualizerIcon color={COLORS.PINK} />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton size="large" sx={{ border: '1px solid' }} onClick={() => setCurrIndex(2)}>
                                <EqualizerIcon color={COLORS.PURPLE} />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton size="large" sx={{ border: '1px solid' }} onClick={() => setCurrIndex(3)}>
                                <EqualizerIcon color={COLORS.WHITE} />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 5 }}>
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
                        </Box>
                    </Grid>
                </Grid>
            )} */}

            <List>
                {messages.map(({ primary }, index) => (
                    <ListItem key={index}>
                        <ListItemButton onClick={() => setCurrIndex(index)}>
                            <ListItemIcon>
                                <EqualizerIcon />
                            </ListItemIcon>
                            <ListItemText primary={primary} />
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
