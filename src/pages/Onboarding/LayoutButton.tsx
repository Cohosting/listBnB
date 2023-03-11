import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useOnboardingContext } from '../../context/onboardingContext';
import { CONFIG_VAR } from './OnboardingLayout';

export const LayoutButton: FC<any> = ({ validate, fieldsToLookUp }) => {

    /* @ts-ignore */
    const { onActionBoxToggle, currentStep, setAllProgress, setCurrentStep } = useOnboardingContext()

    const handleStepChange = () => {
        let shouldReturn = false
        const errors = validate();
        console.log({ errors })
        fieldsToLookUp.forEach((el: any) => {
            if (errors[el]) shouldReturn = true
        });

        if (shouldReturn) return;
        const idx = CONFIG_VAR.indexOf(currentStep);
        if (idx > -1 && idx + 1 !== CONFIG_VAR.length) {
            const step = CONFIG_VAR[idx + 1];
            setCurrentStep(step)
        }
        if ((idx + 1) === CONFIG_VAR.length) onActionBoxToggle();
        const completedProgress: any = CONFIG_VAR.slice(0, idx + 2);
        setAllProgress(completedProgress)

    };

    return (
        <Button variant={'primary'} left={'10%'} mx={'auto'} w={'80%'} position={'absolute'} height={'54px'} bottom={'80px'} onClick={handleStepChange} >Next</Button>

    )
}
