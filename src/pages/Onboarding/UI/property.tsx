import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Error } from '../../../components/Error'
import { useOnboardingContext } from '../../../context/onboardingContext'
import { useValidation } from '../../../hooks/useOboardingValidation'
import { propertyTypeArray } from '../../../utils/config'
import { LayoutButton } from '../LayoutButton'
import { MultipleSelectLayout } from './MultipleSelectLayout'

export const Property = () => {
  /* @ts-ignore */
  const {  selectedPropertyType, setSelectedPropertyType } = useOnboardingContext();
  const { validate, errors } = useValidation({ selectedPropertyType })

  return (
    <>
    <Box>
        {
          errors['selectedPropertyType'] && (
            <Error mb={'15px'}>
              <Text>Please select at least one!</Text>
            </Error>
          )
        }
      <MultipleSelectLayout
        items={propertyTypeArray}
        selectedItems={selectedPropertyType}
        setSelectedItems={setSelectedPropertyType}
      />
    </Box>
      <LayoutButton validate={validate} fieldsToLookUp={['selectedPropertyType']} />
    </>
  )
}
