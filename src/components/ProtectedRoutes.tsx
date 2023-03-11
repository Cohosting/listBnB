import { Flex, Spinner } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { FC } from "react";
import { useAuthContext } from "../context/authContext";

export const ProtectedRoute: FC<{
  children: ReactJSXElement
}> = ({ children }) => {
  const { currentUser, isUserPersist } = useAuthContext();
  if (currentUser === undefined) return (
    <Flex alignItems={'center'} justifyContent={'center'} >
      <Spinner m={4} />;
    </Flex>
  )

  if (currentUser === null && !isUserPersist) {
    window.location.href = window.location.origin + '/' + 'login'
  };
  return children
}
