import { useEffect, useState } from 'react';

const initialDate = new Date();
var interval: NodeJS.Timeout | null = null;

export default function NavTopBarClock() {
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      const clockEl = document.getElementById('clock-timer');
      if (!clockEl) return;

      const style = window.getComputedStyle(clockEl);
      if (style.display === 'none') return;

      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="clock-timer" className="text-muted-foreground hidden font-medium md:inline-block">
      {date.toLocaleString()}
    </div>
  );
}
