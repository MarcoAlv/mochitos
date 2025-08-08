'use client'
import { useEffect, useState } from 'react';
import styles from './FadeInOnLoad.module.css';

export default function FadeInOnLoad({ children, delay = 500 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`${styles.fadeIn} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  );
}