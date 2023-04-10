import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react'
import  { MdKeyboardArrowLeft } from 'react-icons/md';
import  { AiOutlineClose } from 'react-icons/ai';
import { ProgressBar } from '../../components/ProgressBar';
import { useOnboardingContext } from '../../context/onboardingContext';
import { Page } from '../../components/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faXmark } from '@fortawesome/pro-regular-svg-icons';

export const CONFIG_VAR = ['locations', 'property_beds', 'property', 'descriptor', 'activities', 'amenities']

export const OnboardingLayout:FC<any> = ({children , currentStep, onStepChange}) => {
    // @ts-ignore
  const { allProgress } = useOnboardingContext()
    let  styleTopIcon  = {
        border: '1px solid #E3E6EE',
      /* padding:  '5px', */
      borderRadius: '8px',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    };


  let currentStepNumber = CONFIG_VAR.indexOf(currentStep) + 1;

  return (
    <Page>
        <Flex  alignItems={'center'} justifyContent={'space-between'} >
        <Box sx={styleTopIcon}> <FontAwesomeIcon icon={faChevronLeft} fontSize={'16px'} />   </Box>

        <Text textAlign={'center'} fontWeight={700} fontSize={'21px'} lineHeight={'24px'} >Information About <br /> Your Listing</Text>
        <Box sx={{ ...styleTopIcon, padding: '10px' }}><FontAwesomeIcon icon={faXmark
        } fontSize={'16px'} /></Box>

        </Flex>

        <Text mt={'12px'} mx={'auto'} textAlign={'center'} color={'#848C9E'} fontWeight={500}  fontSize={'14px'} w={'250px'} >Choose few option to help us for finding  the best option for you</Text>
        <Box>
        <Text textAlign={'center'} mt={'14px'} mb={'12px'} fontSize={'13px'} color={'#FE7146'} fontWeight={500} >STEP {currentStepNumber}/{CONFIG_VAR.length}</Text>
        <Flex justifyContent={'center'}>
            <ProgressBar config={CONFIG_VAR} currentStep={currentStep} arrayOfProgress={allProgress}  />
        </Flex>
      </Box>
        {children}
    </Page>
  )
};