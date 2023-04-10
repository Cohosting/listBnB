import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';


const Progress: FC<any> = ({ progressLabel, isActive, currentStep }) => {

    return (
        <Box flex={1}>
            <Box bg={'#E3E6EE'} w={'100%'} h={'6px'} borderRadius={'5px'} overflow={'hidden'} >
                <Box h={'6px'} bg={isActive && '#FD815C'} w={currentStep !== 'property_beds' ? '50%' : '100%'} />
            </Box>
            <Text textTransform={'capitalize'} fontWeight={600} fontSize={'11px'} color={isActive ? '#FD815C;' : '#848C9E'} textAlign={'center'} mt={'4px'} >{progressLabel}</Text>
        </Box>
    )
}



export const ProgressBar: FC<any> = ({ config = [], currentStep, arrayOfProgress = [] }) => {
    let isActive = (el: any) => arrayOfProgress.length ? arrayOfProgress.includes(el) : el === currentStep;
  return (
   <HStack  spacing={'10px'} width={'100%'} >
          <Box flex={1}>
              <Box bg={'#E3E6EE'} w={'100%'} h={'6px'} borderRadius={'5px'} overflow={'hidden'} >
                  <Box h={'6px'} bg={isActive('locations') && '#FD815C'} w={'100%'} />
              </Box>
              <Text textTransform={'capitalize'} fontWeight={600} fontSize={'11px'} color={isActive('locations') ? '#FD815C;' : '#848C9E'} textAlign={'center'} mt={'4px'} >locations</Text>
          </Box>
          <Box flex={1}>
              <Box bg={'#E3E6EE'} w={'100%'} h={'6px'} borderRadius={'5px'} overflow={'hidden'} >
                  <Box h={'6px'} bg={(isActive('property') || isActive('property_beds')) && '#FD815C'} w={currentStep === 'property_beds' ? '50%' : '100%'} />
              </Box>
              <Text textTransform={'capitalize'} fontWeight={600} fontSize={'11px'} color={isActive('property') ? '#FD815C;' : '#848C9E'} textAlign={'center'} mt={'4px'} >property</Text>
          </Box>
          <Box flex={1}>
              <Box bg={'#E3E6EE'} w={'100%'} h={'6px'} borderRadius={'5px'} overflow={'hidden'} >
                  <Box h={'6px'} bg={isActive('descriptor') && '#FD815C'} w={'100%'} />
              </Box>
              <Text textTransform={'capitalize'} fontWeight={600} fontSize={'11px'} color={isActive('descriptor') ? '#FD815C;' : '#848C9E'} textAlign={'center'} mt={'4px'} >descriptor</Text>
          </Box>
          <Box flex={1}>
              <Box bg={'#E3E6EE'} w={'100%'} h={'6px'} borderRadius={'5px'} overflow={'hidden'} >
                  <Box h={'6px'} bg={isActive('activities') && '#FD815C'} w={'100%'} />
              </Box>
              <Text textTransform={'capitalize'} fontWeight={600} fontSize={'11px'} color={isActive('activities') ? '#FD815C;' : '#848C9E'} textAlign={'center'} mt={'4px'} >activities</Text>
          </Box>
          <Box flex={1}>
              <Box bg={'#E3E6EE'} w={'100%'} h={'6px'} borderRadius={'5px'} overflow={'hidden'} >
                  <Box h={'6px'} bg={isActive('amenities') && '#FD815C'} w={'100%'} />
              </Box>
              <Text textTransform={'capitalize'} fontWeight={600} fontSize={'11px'} color={isActive('amenities') ? '#FD815C;' : '#848C9E'} textAlign={'center'} mt={'4px'} >amenities</Text>
          </Box>
   </HStack>
  )
}
