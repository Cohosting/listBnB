import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

export const Card: FC<any> = ({
    label,
    subLabel,
    children
}) => {

    let containerStyle = {
        bg: '#FFFFFF',
        borderRadius: '8px',
        boxShadow: '0px 2px 1px rgba(111, 152, 214, 0.1)',
        p: '11px',
        pb: '3px'
    };
    let labelStyle = {
        fontSize: '16px',
        fontWeight: 600,
        color: '#262626',
        borderBottom: '1px solid #E3E6EE',
        pb: '12px',
    }
    return (
        <Box sx={containerStyle}>
            <Box sx={labelStyle}>
                <Text>{label}</Text>
                <Text mt={1} fontSize={'13px'} lineHeight={'14px'} fontWeight={500} color={'#7B7D8A'} >{subLabel}</Text>
            </Box>

            {children}
        </Box>
    )
};

export const CardItem: FC<any> = ({ isLast = false, children }) => {
    return (

        <Box sx={{
            borderBottom: !isLast && '1px  solid #E3E6EE',
            py: '12px'

        }}>
            {children}
        </Box>
    )
}