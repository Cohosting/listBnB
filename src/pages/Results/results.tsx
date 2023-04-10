import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Divider, Flex, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import { ResultEdit } from './ResultEdit';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useParams } from 'react-router-dom';

interface CommonResultLayout {
    children: React.ReactNode;
    label: string;
    onClick?: () => void;
    
}

const  CommonResultLayout:FC<CommonResultLayout> = ({children, label, onClick}) => { 


    let buttonStyle  = {
        fontSize: '14px',
        fontWeight: 500,
        bg: '#FFF8F6',
        border: '1px solid #F9E1DB',
        borderRadius: '8px',
        color: 'black',
        width: '50px',
        height: '28px'

    }

    return (
        <Box>  
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'32px'} fontWeight={500} lineHeight={'24px'} color={'#262626'} >{label}</Text>
                <Button onClick={onClick} sx={buttonStyle} >Edit</Button>
            </Flex>
            <Box>
                {children}
            </Box>
            <Divider my={'20px'} color={'red'} />

        </Box>
    )

}

export const Results = () => {
    const [result, setResult] = useState<any>();
    const { isOpen: isDescriptionOpen, onToggle: onDescriptionClose } = useDisclosure();
    const { isOpen: isSpaceOpen, onToggle: onSpaceClose } = useDisclosure();
    const { id } = useParams<any>(); 
    let descriptionStyle = {
        fontWeight: 500,
        fontSize: '17px',
        color: '#464859',
        lineHeight: '28px'
    };

    let subLabel = {
        fontSize: '16px',
        color:  '#413737',
        lineHeight: '24px',
        fontWeight: 500
    };

    const handleSave = async (val:  string, field: string) => {
        let newResult ={ ...result };
        /* @ts-ignore */
        const ref = doc(db, 'results', id );
        await updateDoc(ref, {
            ...newResult,
            [field]: val
        })
    };


    useEffect(() => {
        (async () => {
            /* @ts-ignore */
            const ref = doc(db, 'results', id);
            const snapshot = await getDoc(ref);
            setResult(snapshot.data())
        })();
    }, [])


  return (
    <>
          {
              !result ? <Spinner /> : (
                  <Box>
                      <Box p={'15px'} height={'100vh'} >
       <CommonResultLayout label='Title' >
        <Box mt={2}>
                                  <Text>{result?.title}</Text>

        </Box>
       </CommonResultLayout>
       <CommonResultLayout label='Description' onClick={onDescriptionClose}>
            <Text mt={'15px'} mb={'10px'} sx={subLabel} >Listing Description</Text>
            <Text  sx={descriptionStyle} >
                                  {result?.description}
            </Text>
       </CommonResultLayout>
       <CommonResultLayout label='Description' onClick={onSpaceClose}>
            <Text mt={'15px'} mb={'10px'} sx={subLabel} >The  space</Text>
                              <Text sx={descriptionStyle} >{result?.space}</Text>
       </CommonResultLayout>
    </Box>
    <ResultEdit  
                          field='description'
        label='Listing Description'
        subLabel={`Give guests a sense of what it's like to stay at your place, including why they'll love staying there.`}
        isOpen={isDescriptionOpen}
        onClose={onDescriptionClose}
        onSave={handleSave}
                          value={result.description}
    />  
    <ResultEdit  
                          field='space'
        label='The Space'
        subLabel={`Provide a general description of what the property and rooms are like so guests know what to expect.`}
        isOpen={isSpaceOpen}
        onClose={onSpaceClose}
        onSave={handleSave}
                          value={result.space}


    />  
                  </Box>
              )
          }

    </>
  )
}
/* 

Please provide me with some key features or highlights of your Airbnb property, such as its location, amenities, nearby attractions, and any unique characteristics. Based on that, I can generate an intriguing Airbnb property title for you that captures the essence of your property and attracts potential guests.
generate intriguing airbnb property title 50 characters max for luxury home near beach, private pool, sleeps 14+ 
You’ll want something like: Lux Beach Escape | Easy Beach Access | 14+ Guest

Key contributor (title)
location
property type
landmark
amenities
nearby attraction
unique characteristics
Guest count
generate intriguing airbnb property title 50 characters max for [property type] near [nearby attraction], [aminities], sleep [guest count]


Key contributor (Description)
location
arrangments
landmark

Write a property listing description for an Airbnb 500 character max about a 3 bedroom 2.5 bathroom 6 beds sleeping 12 guest just 30 minutes away from Zion National park




Key contributor (Space)

Location
amenities

 write a space description for an airbnb in Hurricane, UT describe their listing in greater detail, including room-by-room descriptions, details about amenities. [then write short details about amenities and rooms for example] Amenities include 30 minutes away from Zion national park, huge resort pool with lazy river and hot tub heated year round. first floor has fully equipped kitchen with stainless steel appliances, large living room with hanging boho swings, half bath. Second floor Master suite with en-suite bathroom, second floor bedroom with 2 queen size beds, second floor bedroom with 2 sets of triple full bunk beds, second floor full bathroom. the whole home has a boho style 


 */