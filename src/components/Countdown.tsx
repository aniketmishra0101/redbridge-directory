import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export const Countdown: React.FC = () => {
  const { launch } = siteConfig;
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (!launch.isConfirmed) return;

    const targetTime = new Date(launch.targetDate).getTime();

    const calculateTime = () => {
      const now = Date.now();
      const distance = targetTime - now;

      if (distance <= 0) {
        setIsLive(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [launch]);

  if (!launch.isConfirmed) {
    return (
      <div className="countdown-box" aria-label="Directory Launch Status">
        <div className="countdown-label-row">
          <span className="countdown-label">STATUS: PRE-LAUNCH</span>
        </div>
        <div className="countdown-state-msg" style={{ display: 'block' }}>
          {launch.unconfirmedMessage}
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-box" id="countdown-container" aria-label="Directory Launch Countdown">
      <div className="countdown-label-row">
        <span className="countdown-label">
          <span className="countdown-pulsing-dot" aria-hidden="true"></span>
          {launch.label}
        </span>
      </div>

      <div className="sr-only" aria-live="polite">
        The Redbridge Directory is scheduled to launch on 1st January 2027 GMT UK time.
      </div>

      {isLive ? (
        <div className="countdown-state-msg" style={{ display: 'block' }} role="status">
          {launch.liveMessage}
        </div>
      ) : (
        <div className="countdown-grid" aria-hidden="true">
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft?.days ?? 0).padStart(2, '0')}</span>
            <span className="countdown-unit-label">Days</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft?.hours ?? 0).padStart(2, '0')}</span>
            <span className="countdown-unit-label">Hours</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft?.minutes ?? 0).padStart(2, '0')}</span>
            <span className="countdown-unit-label">Minutes</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft?.seconds ?? 0).padStart(2, '0')}</span>
            <span className="countdown-unit-label">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};
