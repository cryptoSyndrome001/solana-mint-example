import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useMediaQuery } from 'react-responsive'


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = (isMobile) => {
    return {
        isPlaying: true,
        size: isMobile ? 80 : 120,
        strokeWidth: isMobile ? 4 : 6,
    }
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className="App">
            <CountdownCircleTimer
                {...timerProps(isTabletOrMobile)}
                colors={[["#fff"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime }) =>
                    renderTime("days", getTimeDays(daysDuration - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps(isTabletOrMobile)}
                colors={[["#fff"]]}
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > hourSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps(isTabletOrMobile)}
                colors={[["#fff"]]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > minuteSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps(isTabletOrMobile)}
                colors={[["#82F7E5"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("seconds", getTimeSeconds(elapsedTime))
                }
            </CountdownCircleTimer>
        </div>
    );
}
