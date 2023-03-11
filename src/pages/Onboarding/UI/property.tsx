import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Error } from '../../../components/Error'
import { useOnboardingContext } from '../../../context/onboardingContext'
import { useValidation } from '../../../hooks/useOboardingValidation'
import { propertyTypeArray } from '../../../utils/config'
import { Animate } from '../Animate'
import { LayoutButton } from '../LayoutButton'
import { MultipleSelectLayout } from './MultipleSelectLayout'
import { StepLabel } from './StepLabel'

export const Property = () => {
  /* @ts-ignore */
  const {  selectedPropertyType, setSelectedPropertyType } = useOnboardingContext();
  const { validate, errors } = useValidation({ selectedPropertyType })

  return (
    <>
      <Animate key='property'>
        <StepLabel />

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
      </Animate>

      <LayoutButton validate={validate} fieldsToLookUp={['selectedPropertyType']} />
    </>
  )
}
