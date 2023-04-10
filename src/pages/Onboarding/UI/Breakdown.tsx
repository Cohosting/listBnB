import { Box, Button, Checkbox, Flex, Switch, Text, useDisclosure } from '@chakra-ui/react'
import { faPenToSquare, faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react'
import { Card, CardItem } from '../../../components/Card';
import { Counter } from '../../../components/Counter';
import { useOnboardingContext } from '../../../context/onboardingContext';
import { bedConfig, tvConfig } from '../../../utils/config';
import { convertBedsDataToText } from '../../../utils/helper';
import { BreakdownActionBox, TvSizeItem } from '../BreakdownActionBox';
import { LayoutButton } from '../LayoutButton';


const BedroomCardItem: FC<any> = ({ children, label, subLabel, isLast }) => {


    let labelStyle = {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        textTransform: 'capitalize',
        color: '#464859',
        mb: '5px'
    };
    let subLabelStyle = {
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '14px',
        textTransform: 'capitalize',
        color: '#7B7D8A',
        fontFamily: 'Public Sans'
    };

    return (
        <CardItem isLast={isLast}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Text sx={labelStyle}>{label}</Text>
                    <Text sx={subLabelStyle}>{subLabel}</Text>
                </Box>
                {children}
            </Flex>
        </CardItem>

    )
}

export const Breakdown = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: isBedOpen, onToggle: onBedToggle } = useDisclosure();

    const [currentSelectedBed, setCurrentSelectedBed] = useState<any>({})

    /* @ts-ignore */
    const { bedroomDetails, setBedroomDetails, tvState, setTvState, sharedWith, setSharedWith } = useOnboardingContext()
    let checkboxTextStyle = {
        fontWeight: 500,
        fontSize: '14px',
        color: '#464859',
        lineHeight: '16px',
        textTransform: 'capitalize'
    };



    const updateBedroomState = (field: string, value: any, id: string) => {
        let newBedroomDetails = bedroomDetails.filter((el: any) => el.id !== id)
        let bedroom = bedroomDetails.filter((el: any) => el.id === id)[0];
        bedroom[field] = value;
        newBedroomDetails.push(bedroom);
        setBedroomDetails(newBedroomDetails.sort((a: any, b: any) => a.bedroom - b.bedroom));

    };

    const handleBedIncreaseOrDecrease = (val: string, field: string) => {
        setCurrentSelectedBed({
            ...currentSelectedBed,
            beds: {
                ...currentSelectedBed.beds,
                [field]: val
            }
        });

    };


    const onHandleSave = () => {
        let newBedroomDetails = [...bedroomDetails];
        newBedroomDetails = newBedroomDetails.filter((el) => el.id !== currentSelectedBed.id);

        newBedroomDetails.push(currentSelectedBed);

        setBedroomDetails(newBedroomDetails.sort((a: any, b: any) => a.bedroom - b.bedroom));
        setCurrentSelectedBed({})

    };

    const handleSharedChange = (val: string) => {
        let newArr = [...sharedWith];

        if (newArr.includes(val)) {
            newArr = newArr.filter((el: any) => el !== val)

        } else {
            newArr.push(val)
        };

        setSharedWith(newArr)

    }

    return (
        <Box mt={4} pb={'160px'}>
            {/* Bedroom */}
            {
                bedroomDetails.map((el: any) => (
                    <Box mb={'20px'}>
                        <Card label={`Bedroom #${el.bedroom}`}>
                            <BedroomCardItem label="Shared With Others" subLabel={'Guest might share this space'}>
                                <Switch onChange={(e) => updateBedroomState('isShareWithOthers', e.target.checked, el.id)} isChecked={el.isShareWithOthers} colorScheme={'orange'} size={'md'} />
                            </BedroomCardItem>
                            <BedroomCardItem label="Sleeping Arrangement" subLabel={convertBedsDataToText(el) ? convertBedsDataToText(el) : 'Your sleeping arrangement'}>
                                <Button variant={'ghost'} onClick={() => {
                                    setCurrentSelectedBed(el);
                                    onBedToggle()
                                }}>
                                    <Flex alignItems={'center'} justifyContent={'center'} >
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                        <Text ml={1} fontSize={'13px'} fontWeight={600}>Edit</Text>
                                    </Flex>
                                </Button>
                            </BedroomCardItem>
                            <BedroomCardItem isLast={true} label="Private Attached Bathroom" subLabel={'Attached bathroom or private entrance'}>
                                <Switch onChange={(e) => updateBedroomState('isPrivateAttached', e.target.checked, el.id)} isChecked={el.isPrivateAttached} colorScheme={'orange'} size={'md'} />
                            </BedroomCardItem>
                        </Card>
                    </Box>
                ))
            }
            {/* TV */}
            <Box mb={'20px'}>
                <Card label="TV">
                    <BedroomCardItem label="Shared With Others" subLabel={'Guest might share this TV'}>
                        <Switch colorScheme={'orange'} isChecked={tvState.isShared} onChange={(e) => setTvState({
                            ...tvState,
                            isShared: e.target.checked
                        })} size={'md'} />
                    </BedroomCardItem>
                    <BedroomCardItem isLast={true} label="TV Size" subLabel={tvState.size ? `${tvState.size} inches` : 'Add TV size'}>
                        <Button variant={'unstyled'}>
                            <Button display={'flex'} variant={'ghost'} onClick={onToggle} alignItems={'center'} justifyContent={'center'} >
                                <FontAwesomeIcon icon={faPlus} />
                                <Text ml={1} fontSize={'13px'} fontWeight={600}>Add</Text>
                            </Button>
                        </Button>
                    </BedroomCardItem>
                </Card>
            </Box>

            {/* Shared */}
            <Box>
                <Card label="Shared Space" subLabel="For any of the space you’ve marked as shared ">
                    <CardItem>
                        <Flex alignItems={'center'} justifyContent={'space-between '}>
                            <Text sx={checkboxTextStyle}>Me</Text>
                            <Checkbox
                                isChecked={sharedWith.includes('Me')}
                                colorScheme={'orange'}
                                onChange={() => handleSharedChange('Me')}
                            />
                        </Flex>
                    </CardItem>
                    <CardItem>
                        <Flex alignItems={'center'} justifyContent={'space-between '}>
                            <Text sx={checkboxTextStyle}>My family</Text>
                            <Checkbox isChecked={sharedWith.includes('My family')} colorScheme={'orange'} onChange={() => handleSharedChange('My family')}
                            />
                        </Flex>
                    </CardItem>
                    <CardItem >
                        <Flex alignItems={'center'} justifyContent={'space-between '}>
                            <Text sx={checkboxTextStyle}>With other guest</Text>
                            <Checkbox onChange={() => handleSharedChange('With other guest')} isChecked={sharedWith.includes('With other guest')} colorScheme={'orange'} />
                        </Flex>
                    </CardItem>
                    <CardItem >
                        <Flex alignItems={'center'} justifyContent={'space-between '}>
                            <Text sx={checkboxTextStyle}>Other guest</Text>
                            <Checkbox onChange={() => handleSharedChange('Other guest')} isChecked={sharedWith.includes('Other guest')} colorScheme={'orange'} />
                        </Flex>
                    </CardItem>
                    <CardItem isLast={true}>
                        <Flex alignItems={'center'} justifyContent={'space-between '}>
                            <Text sx={checkboxTextStyle}>Roommates</Text>
                            <Checkbox onChange={() => handleSharedChange('Roommates')} isChecked={sharedWith.includes('Roommates')} colorScheme={'orange'} />
                        </Flex>
                    </CardItem>
                </Card>
            </Box>
            <BreakdownActionBox isOpen={isOpen} onToggle={onToggle} >
                {
                    tvConfig.map((el, idx) => (<TvSizeItem handleClick={(val: string) => setTvState({
                        ...tvState,
                        size: val
                    })} value={el + ' ' + 'inches'} isLast={tvConfig.length === idx + 1} >
                        <Checkbox isChecked={tvState.size.includes(el)} colorScheme={'orange'} />

                    </TvSizeItem>))
                }

            </BreakdownActionBox>

            <BreakdownActionBox onSave={onHandleSave} isOpen={isBedOpen} onToggle={onBedToggle} >
                {
                    Object.keys(currentSelectedBed).length && Object.keys(currentSelectedBed?.beds || {}).map((key, idx) => (
                        <TvSizeItem value={key} isLast={Object.keys(currentSelectedBed.beds) || 0 === idx + 1}  >
                            <Counter field={key} handleClick={handleBedIncreaseOrDecrease} value={currentSelectedBed?.beds[key]} />
                        </TvSizeItem>
                    ))
                }

            </BreakdownActionBox>
            <LayoutButton />

        </Box>
    )
}
