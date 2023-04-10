import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { FC } from 'react'
import { SelectBox } from '../../../components/SelectBox';

export const MultipleSelectLayout:FC<any> = ({items,selectedItems, setSelectedItems}) => {

    const handleSelect  = (val: string)  => {
        let newArr = [...selectedItems];
        if(selectedItems.includes(val)) {
          newArr =  newArr.filter((el) => el  !== val )
        } else {
          newArr.push(val);
        };
        setSelectedItems(newArr)
    
    };
  return (
    <Box pb={'160px'}>
      <SimpleGrid columns={2}  columnGap={'20px'} rowGap={'20px'} >
      {
            items.map((el: any) => (
              <SelectBox
                key={`key--${el.label}`}
                label={el.label}
                icon={el.icon}
                value={selectedItems}  
                onSelect={handleSelect}
               />
            ))
        }
      </SimpleGrid>
   </Box>
  )
}
