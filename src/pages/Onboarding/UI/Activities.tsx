import React from 'react';
import { Box, Text, } from '@chakra-ui/react'
import { activitiesArray } from '../../../utils/config';
import { useOnboardingContext } from '../../../context/onboardingContext';
import { MultipleSelectLayout } from './MultipleSelectLayout';
import { LayoutButton } from '../LayoutButton';
import { useValidation } from '../../../hooks/useOboardingValidation';
import { Error } from '../../../components/Error';
import { Animate } from '../Animate';
import { StepLabel } from './StepLabel';

export const Activities = () => {
  /* @ts-ignore */
  const {  selectedActivities, setSelectedActivities } = useOnboardingContext();
  const { validate, errors } = useValidation({ selectedActivities })

  return (
    <>
      <Animate key='activity'>
        <StepLabel />

   <Box>  
        {
          errors.selectedActivities && (
            <Error mb={'15px'}>
              <Text>Please select at least one!</Text>
            </Error>
          )
        }
      <MultipleSelectLayout
        items={activitiesArray}
        selectedItems={selectedActivities}
        setSelectedItems={setSelectedActivities}
      />
   </Box>

      </Animate>
      <LayoutButton validate={validate} fieldsToLookUp={['selectedActivities']} />
    </>
  )
}
