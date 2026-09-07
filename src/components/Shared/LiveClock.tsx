import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface LiveClockProps {
  className?: string;
}

export function LiveClock({ className }: LiveClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span id="live-clock" className={`flex items-center gap-1.5 ${className || ''}`} style={{ fontFamily: "'Sora', sans-serif" }}>
      <Calendar size={14} className="opacity-70" />
      <span>
        {time.toLocaleDateString('en-IN', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </span>
      <Clock size={14} className="ml-1 opacity-70" />
      <span>
        {time.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).toUpperCase()}
      </span>
    </span>
  );
}
