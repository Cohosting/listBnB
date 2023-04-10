import { Box, Button, Checkbox, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React, { Children, FC } from 'react';
import { Counter } from '../../components/Counter';
import { tvConfig } from '../../utils/config';

import { ActionBox } from './../../components/ActionBox';



export const TvSizeItem: FC<any> = ({ value, isLast, children, handleClick }) => {
    return (
        <Flex onClick={() => handleClick && handleClick(value)} cursor={'pointer'} alignItems={'center'} justifyContent={'space-between'}
            py={'16px'}
            borderBottom={!isLast ? '1px solid #E3E6EE' : ''}
            pb={isLast ? 0 : '16px'}
        >
            <Text fontWeight={500} fontSize={'14px'} textTransform={'capitalize'} lineHeight={'16px'} color={'#464859'} >{value} </Text>
            {children}
        </Flex>
    )
};




export const BreakdownActionBox: FC<any> = ({
    isOpen, onToggle, children, onSave
}) => {
    let labelStyle = {
        fontSize: '16px',
        fontWeight: 600,
        color: '#262626',
        borderBottom: '1px solid #E3E6EE',
        pb: '12px',
    }
    return (
        <ActionBox isOpen={isOpen} onToggle={onToggle}>
            <Box px={'16px'} pb={'20px'} >
                <Box sx={labelStyle}>
                    <Text>Shared Space</Text>
                    <Text mt={1} fontSize={'14px'} fontWeight={500} color={'#7B7D8A'} >The number of beds for each listing is based on these choices</Text>
                </Box>


                <Box mt={2}>
                    {children}
                </Box>
            </Box>


            <Box
                height={'2px'}
                w={'100%'}
                boxShadow={'0px -3px 10px rgba(254, 113, 70, 0.2)'}
                bg={'#E8EBF0'}
                borderRadius={'12px'}
            />
            <Flex alignItems={'center'} justifyContent={'center'} p={'30px 66px'} >
                <Button w={'100%'} height={'55px'} onClick={() => {
                    onSave && onSave();
                    onToggle()
                }}>Save</Button>
            </Flex>

        </ActionBox>
    )
}
