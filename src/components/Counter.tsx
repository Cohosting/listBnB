import { Box, Flex, Text } from '@chakra-ui/react'
import { faMinus, faPlus } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

export const Counter: FC<any> = ({ value, handleClick, field }) => {

    let iconBoxStyle = {
        border: '1px solid #fee3da',
        borderRadius: '30px',
        w: '30px',
        h: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FE7146',
        cursor: "pointer"
    };


    return (
        <Flex alignItems={'center'} justifyContent={'center'} >
            <Flex sx={iconBoxStyle} onClick={() => handleClick(value - 1, field)} >
                <FontAwesomeIcon icon={faMinus} />
            </Flex>
            <Text mx={'10px'} fontSize={'14px'} fontWeight={600} lineHeight={'18px'} >{value}</Text>
            <Flex sx={iconBoxStyle} onClick={() => handleClick(value + 1, field)} >
                <FontAwesomeIcon icon={faPlus} />
            </Flex>
        </Flex>
    )
}
