import React from 'react';
import { Box, Text, } from '@chakra-ui/react'
import { activitiesArray } from '../../../utils/config';
import { useOnboardingContext } from '../../../context/onboardingContext';
import { MultipleSelectLayout } from './MultipleSelectLayout';
import { LayoutButton } from '../LayoutButton';
import { useValidation } from '../../../hooks/useOboardingValidation';
import { Error } from '../../../components/Error';

export const Activities = () => {
  /* @ts-ignore */
  const {  selectedActivities, setSelectedActivities } = useOnboardingContext();
  const { validate, errors } = useValidation({ selectedActivities })

  return (
    <>
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
      <LayoutButton validate={validate} fieldsToLookUp={['selectedActivities']} />
    </>
  )
}
