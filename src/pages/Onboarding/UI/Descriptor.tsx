import React from 'react';
import { Box, Text } from '@chakra-ui/react'
import { useOnboardingContext } from '../../../context/onboardingContext'
import { descriptorArray } from '../../../utils/config'
import { MultipleSelectLayout } from './MultipleSelectLayout'
import { useValidation } from '../../../hooks/useOboardingValidation';
import { LayoutButton } from '../LayoutButton';
import { Error } from '../../../components/Error';

export const Descriptor = () => {
  // @ts-ignore
  const { selectedDescriptor, setSelectedDescriptor  } = useOnboardingContext();
  const { validate, errors } = useValidation({ selectedDescriptor })

  return (
    <>
    <Box>
        {
          errors['selectedDescriptor'] && (
            <Error mb={'15px'}>
              <Text>Please select at least one!</Text>
            </Error>
          )
        }
      <MultipleSelectLayout
        items={descriptorArray}
        selectedItems={selectedDescriptor}
        setSelectedItems={setSelectedDescriptor}
      />
    </Box>
      <LayoutButton validate={validate} fieldsToLookUp={['selectedDescriptor']} />
    </>

  )
}
