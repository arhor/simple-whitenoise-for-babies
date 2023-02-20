import { useEffect, useState } from 'react';

const Timer = ({ enabled }) => {
    const [sec, setSec] = useState('00');
    const [min, setMin] = useState('00');
    const [hrs, setHrs] = useState('00');

    function addLeadingZero(number) {
        return  `${number < 10 ? '0' : ''}${number}`;
    }

    useEffect(() => {
        if (enabled) {
            const startDateTime = Date.now();

            const interval = setInterval(() => {
                const timePassed = Date.now() - startDateTime;

                setSec(addLeadingZero(Math.floor((timePassed / 1000) % 60)));
                setMin(addLeadingZero(Math.floor((timePassed / 1000 / 60) % 60)));
                setHrs(addLeadingZero(Math.floor((timePassed / 1000 / 60 / 60) % 24)));
            }, 1000);

            return () => clearInterval(interval);
        } else {
            setSec('00');
            setMin('00');
            setHrs('00');
        }
    }, [enabled]);

    return (
        <div>{hrs}:{min}:{sec}</div>
    );
};

export default Timer;
