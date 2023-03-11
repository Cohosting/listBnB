import React, { FC } from 'react';
import { Text } from '@chakra-ui/react'
import { Error } from '../../components/Error';




export const AuthError:FC<any> = ({ errorCode}) => {

    let errorStyle = {
      fontWeight: 500,
    }
    switch(errorCode) {
        case 'notChecked':
          // code block
          return (  
            <Error>
              <Text sx={errorStyle} >Please agree with the term  and service before procide</Text>
            </Error>
          )
          break;
        case  'auth/email-already-in-use':  
        return (
            <Error>
              <Text sx={errorStyle}>This email is already in use </Text>
            </Error>

        );
        case  'auth/weak-password':  
        return (
            <Error>
              <Text sx={errorStyle}>The password must be 6 characters long or more.</Text>
            </Error>

        );
        case 'auth/internal-error' : 
        return (
          <Error>
            <Text sx={errorStyle}>Unknown error occured</Text>
          </Error>

      );
      case 'auth/user-not-found' : 
      return (
        <Error>
          <Text sx={errorStyle}>Email or password is wrong</Text>
        </Error>
    );
    case 'auth/wrong-password' : 
    return (
      <Error>
        <Text sx={errorStyle}>Email or password is wrong</Text>
      </Error>
  );


        case 'unknown' : 
        return (
          <Error>
            <Text sx={errorStyle}>Unknown error occured</Text>
          </Error>
      );
        default:
            return null;
      }
 
}
