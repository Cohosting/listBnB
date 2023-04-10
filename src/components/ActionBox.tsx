import React, { FC, useRef } from 'react';
import { Box, Flex, useOutsideClick } from '@chakra-ui/react'
import { motion } from 'framer-motion';



const MotionComponent = motion(Box)
export const ActionBox:FC<any> = ({children, isOpen, onToggle}) => {
  const ref  = useRef();

  useOutsideClick({
    // @ts-ignore
    ref,
    handler: ()  => {
      console.log('outside  clicked')
      isOpen && onToggle()
    }

  })
  if(!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.5, }}
    >

      <Flex zIndex={99} flexDir={'column'} justifyContent={'flex-end'} height={'100vh'} bg={'rgba(109, 93, 93, 0.85)'} position={'fixed'} left={0} w={'100%'} top={'0'} >
        <MotionComponent initial={{ y: 100, }}
          animate={{ y: 0, }}
          transition={{ duration: 0.5, }} py={3} height={'max-content'} bg={'#F5F9FF'} borderRadius={'8px 8px 0px 0px'} overflowY={'auto'}
          // @ts-ignore
          ref={ref}  >


            {children}
        </MotionComponent>
      </Flex>
    </motion.div>
  )
}
