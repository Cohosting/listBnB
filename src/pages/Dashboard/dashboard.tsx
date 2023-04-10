import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Page } from '../../components/Page'
import { useAuthContext } from '../../context/authContext'
import { auth, db } from '../../lib/firebase'
import { generateSpace } from '../../lib/openai'
import { ResultItem } from './resultItem'

export const Dashboard = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<any>(null)
  const { currentUser } = useAuthContext();
  const [searchText, setSearchText] = useState('')


  useEffect(() => {
    if (!currentUser) return;
    (async () => {
      const resultsRef = collection(db, 'results')
      const q = query(resultsRef, where("createdBy", "==", currentUser.id));
      const snapshot = await getDocs(q);
      let data = snapshot.docs.map((el) => el.data());
      setResults(data)

    })()

  }, [currentUser])


  return (

    <Page>
      <Button onClick={() => signOut
        (auth
        )} >signout</Button>
      <Flex alignItems={'center'} justifyContent={'space-between'} >
        <Box>
          <Text color={'#848C9E'} lineHeight={'18px'} fontSize={'15px'} >Hi, {currentUser?.fullName}</Text>
          <Text mt={1} fontSize={'19px'} color={'#262626'} fontWeight={700} >Your Results 🏠</Text>
        </Box>
        <Image w={'44px'} borderRadius={'14px'} h={'44px'} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='user-image' />
      </Flex>
      <Box mt={'16px'} mb={'16px'}>
        <InputGroup height={'46px'}>
          <InputLeftElement
            paddingLeft='10px'
            height={'100%'}
            pointerEvents='none'
            children={<AiOutlineSearch color='#848C9E' style={{

            }} fontSize={'22px'} />}
          />
          <Input paddingLeft={'43px'} fontSize={'16px'} value={searchText} onChange={(e) => setSearchText(e.target.value)} height={'100%'}
            border={'1px solid #DAE4FD'} bg={'#FFFFFF'} borderRadius={'8px'} type='text' placeholder='Search' />
        </InputGroup>

      </Box>
      <Box my={2} mt={'16px'} >
        {
          results !== null && results.map((el: any) => <ResultItem {...el} />)
        }
      </Box>

      <Button height={'54px'} pos={'fixed'} bottom={'40px'} w={'55%'} left={'21%'} onClick={() => navigate('/onboarding')} >Create</Button>
    </Page>
  )
}
