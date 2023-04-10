import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import { collection, doc, addDoc, updateDoc } from 'firebase/firestore';
import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { useOnboardingContext } from '../../context/onboardingContext';
import { db } from '../../lib/firebase';
import { generateDescription, generateSpace, generateTitle } from '../../lib/openai';




function useDidUpdateEffect(fn: any, inputs: any) {
    const didMountRef = useRef(false);
  
    useEffect(() => {
      if (didMountRef.current) { 
         fn();
         return () => {}
        }
      didMountRef.current = true;
    }, inputs);
  }
export const ResultContainer:FC<any> = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();
  
  const {
    counts, 
    location, 
    selectedDescriptor, 
    tone,  
    selectedPropertyType, 
    selectedActivities, 
    selectedAmentities, 
  }: any = useOnboardingContext();


  const generateResult = async () => {
    const ref = collection(db, 'results');
    const docRef = await addDoc(ref, {})
    try {
      const title = await generateTitle();
      const description = await generateDescription();
      const space = await generateSpace();
      await updateDoc(docRef, {
        id: docRef.id,
        counts,
        location,
        selectedDescriptor,
        tone,
        selectedPropertyType,
        selectedActivities,
        selectedAmentities, 
        createdBy: currentUser.id,
        title,
        description,
        space
      })
      navigate(`/results/${docRef.id}`)
    } catch (err) {
      console.log(err)
    }

  };






  useDidUpdateEffect(generateResult, [currentUser])
  return (
     <Box>
       <Flex mt={'50px'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} >
            <Spinner  />
            <Text fontWeight={500} fontSize={'30px'} >Your result is being generated. Please wait.</Text>
       </Flex>

     </Box>
  )
}
