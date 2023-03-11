import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { BiError } from "react-icons/bi";

export const Error: FC<any> = ({ children, ...otherProps }) => {
    return (
        <Flex alignItems={'center'} color='#ff0033' mt={2} {...otherProps}>
            <BiError style={{ marginRight: '6px' }} />
            {children}
        </Flex>

    )
};

