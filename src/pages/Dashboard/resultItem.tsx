import React, { FC } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { BiBed } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faHouse, faLocationDot } from '@fortawesome/pro-regular-svg-icons';
import { auth } from '../../lib/firebase';
import { signOut } from 'firebase/auth';

const CountBox: FC<any> = ({ sx, icon, label }) => {

    let iconContainer = {
        bg: '#FFF8F6',
    }
    return (
        <Flex _after={{
            content: '""',
            height: '55%',
            width: '1px',

            position: 'absolute',
            right: '15px',
            top: '22.5%',
            backgroundColor: '#E3E6EE',
            ...sx
        }} position={'relative'} flex={1} alignItems={'center'} >
            <Flex alignItems={'center'} justifyContent={'center'} w={'28px'} h={'28px'} sx={iconContainer} borderRadius={'100%'}>
                {icon}
            </Flex>
            <Text ml={'6px'} fontSize={'14px'} fontWeight={500} >{label}</Text>
        </Flex >
    )
}
export const ResultItem: FC<any> = ({ id }) => {
    const navigate = useNavigate();
    let titleStyle = {
        fontWeight: 600,
        color: '#262626',
        fontSize: '17px'
    }
    return (
        <Box p={'16px'} boxShadow={'0px 2px 1px rgba(111, 152, 214, 0.1)'} borderRadius={'8px'} bg={'#FFFFFF'} mb={'16px'} onClick={() => navigate(`/results/${id}`)} cursor={'pointer'}  >

            <Box color={'#464859'}>
                <Text sx={titleStyle}>Recommended Real estate for you</Text>
                <Text mt={'10px'} fontWeight={500} fontSize={'15px'} color={'#464859'} >Taman Rumpun Bahagia 75300 Melaka</Text>
            </Box>

            <Flex alignItems={'center'} mb={'12px'} >
                <FontAwesomeIcon icon={faLocationDot} color={'#FE7146'} />
                <Text color={'#464859'} fontWeight={500} fontSize={'14px'} ml={2}>New York, USA</Text>
            </Flex>
            <Flex alignItems={'center'} border={'1px solid #E3E6EE'} borderRadius={'8px'} p={'10px'} >
                <CountBox
                    icon={<FontAwesomeIcon fontSize={'13px'} icon={faBed} color={'#FE7146'} />}
                    label={'3 beds'}

                />
                <CountBox
                    icon={<FontAwesomeIcon fontSize={'13px'} icon={faBath} color={'#FE7146'} />}
                    label={'6 baths'}

                />
                <CountBox sx={{
                    width: 0
                }}
                    icon={<FontAwesomeIcon icon={faHouse} color={'#FE7146'} />}
                    label={'2050 ft2'}


                />
            </Flex>
        </Box>
    )
}
