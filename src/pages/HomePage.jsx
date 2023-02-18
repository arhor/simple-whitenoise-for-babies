import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

import whiteNoiseUrl from '~/assets/audio/white-noise.ogg';

//////////////////////////////////////////////////////////////////////////////
// global so we can access them from handlers
const actx = new (AudioContext || webkitAudioContext)();
let src = whiteNoiseUrl;
let audioData;
let srcNode;  

// Load some audio (CORS need to be allowed or we won't be able to decode the data)
fetch(src, {mode: "cors"})
    .then((resp) => { return resp.arrayBuffer() })
    .then((buff) => { actx.decodeAudioData(buff, playLoop) });

// Sets up a new source node as needed as stopping will render current invalid
function playLoop(abuffer) {
    if (!audioData) {
        audioData = abuffer; // create a reference for control buttons
    }
    srcNode = actx.createBufferSource();  // create audio source
    srcNode.buffer = abuffer;             // use decoded buffer
    srcNode.connect(actx.destination);    // create output
    srcNode.loop = true;                  // takes care of perfect looping
    srcNode.start();                      // play...
}

// Simple example control
document.querySelector("button").onclick = function() {
    if (srcNode) {
        srcNode.stop();
        srcNode = null;   
        this.innerText = "Play";
    } else {
        playLoop(audioData);
        this.innerText = "Stop";
    }
};
//////////////////////////////////////////////////////////////////////////////

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
        <Box sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
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
        </Box>
    );
};

export default HomePage;
