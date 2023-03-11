import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { Count } from '../../../components/Count'
import { Error } from '../../../components/Error'
import { LocationSuggestion } from '../../../components/LocationSuggestion'
import { useOnboardingContext } from '../../../context/onboardingContext'
import { useValidation } from '../../../hooks/useOboardingValidation'
import { LayoutButton } from '../LayoutButton'
import { motion, AnimatePresence } from "framer-motion";
import { Animate } from '../Animate'
import { StepLabel } from './StepLabel'

export const Location = () => {
  // @ts-ignore
  const { setLocation, location, setCounts, counts } = useOnboardingContext();
  const { bedrooms, bathrooms, occupency } = counts;

  const { validate, errors } = useValidation({ location, counts })


  let countContainerStyle = {
    border: '1px solid #E3E6EE',
    borderRadius: '8px',
    padding: '10px 20px',
  };
  let sx = {
    borderRight: '1px solid #E3E6EE',
    flex: 1
  };


  const handleCountChange = (val: number, name: string) => {
    setCounts({
      ...counts,
      [name]: val
    })
  }


  let fieldsToLookUp = ['location.coordinates', 'location.locationText', 'counts.bathrooms', 'counts.bedrooms', 'counts.occupency']
  return (
    <>
      <Animate key='location'>
        <StepLabel />
      <Box>
        {errors['location.coordinates'] && (
          <Error my={"15px"}>
            <Text>Please input address and property information</Text>
          </Error>
        )}
        {(errors['counts.bedrooms'] || errors['counts.bathrooms'] || errors['counts.occupency']) && (
          <Error my={"15px"}>
            <Text>Bedrooms, bathrooms  and occupency cannot be 0.</Text>
          </Error>
        )}
        <LocationSuggestion onLocationClick={(el: any) => setLocation({ locationText: el.place_name, coordinates: el.geometry.coordinates })} />
        <Divider my={'16px'} />
        <Flex sx={countContainerStyle} justifyContent={'space-between'} >
          <Count handleChange={handleCountChange} sx={sx} label={'bathrooms'} count={bathrooms} />
          <Count handleChange={handleCountChange} sx={{
            ...sx,
            alignItems: 'center'

          }} label={'bedrooms'} count={bedrooms} />
          <Count handleChange={handleCountChange} sx={{
            ...sx,
            alignItems: 'flex-end',
            borderRight: 0

          }} label={'occupency'} count={occupency} />
        </Flex>
      </Box>
      </Animate>
      <LayoutButton validate={validate} fieldsToLookUp={fieldsToLookUp} />
    </>

  )
}
