import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'

export const Page: FC<{
    children: React.ReactNode
}> = ({ children, ...otherProps }) => {
    return (
        <Box px={'20px'} pt={'15px'} bg={'#F5F9FF'} h={'100vh'} overflowY={'auto'}  {...otherProps}  >
            {children}
        </Box>
    )
}
