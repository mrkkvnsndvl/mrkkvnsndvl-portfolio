'use client';

import { motion } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';

export const TransitionContext = createContext<number>(0);

export const useTransition = () => {
  return useContext(TransitionContext);
};

export const TransitionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [transition, setTransition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setTransition(1);
      }, 400);
    }, 200);
  }, []);

  return (
    <TransitionContext.Provider value={transition}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: transition }}
        transition={{ duration: 0.4 }}>
        {children}
      </motion.div>
    </TransitionContext.Provider>
  );
};
