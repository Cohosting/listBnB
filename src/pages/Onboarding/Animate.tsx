
import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Animate: FC<{
    children: React.ReactNode,
    key: string
}> = ({ children, key }) => {


    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={`e eree`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>

    )
}
