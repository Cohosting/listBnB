import React from 'react';
import { Text } from '@chakra-ui/react'
import { useOnboardingContext } from '../../../context/onboardingContext';

export const StepLabel = () => {
    /*@ts-ignore  */
    const { currentStep } = useOnboardingContext();

    return (
        <Text mb={'12px'} mt={'24px'} fontWeight={600} fontSize={'18px'} textTransform={'capitalize'} >{currentStep}</Text>

    )
}
