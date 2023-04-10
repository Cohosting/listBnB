import { useDisclosure } from "@chakra-ui/react";
import { createContext, FC, useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const contextObject = createContext(null);




const OnboardingContextProvider:FC<any>  =  ({children , currentStep,setCurrentStep}) => {
    const  { isOpen: isActionBoxOpen, onToggle:  onActionBoxToggle } = useDisclosure();
    const [allProgress,  setAllProgress] = useState([]);
    const [counts, setCounts] = useState({
        bedrooms: 3,
        bathrooms:  0,
        occupency: 0,
    });
    const [bedroomDetails, setBedroomDetails] = useState([]);
    const [tvState, setTvState] = useState({
        isShared: false,
        size: ''
    });
    const [sharedWith, setSharedWith] = useState([])

    const [selectedDescriptor, setSelectedDescriptor] = useState([]);
    const [selectedPropertyType, setSelectedPropertyType] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [selectedAmentities, setSelectedAmenities] = useState([]);
    const [tone, setTone] = useState('')


    const [location, setLocation] = useState({
        coordinates: [],
        locationText: ''
    });

    useEffect(() => {
        let arr: any = [...bedroomDetails];

        for (let i = 1; i <= counts.bedrooms; i++) {
            if (arr.length < i) {
                arr.push({
                    bedroom: i,
                    id: uuidv4(),
                    isShareWithOthers: false,
                    sleepingArrangement: [],
                    isPrivateAttached: false,
                    beds: {
                        double: 0,
                        queen: 0,
                        single: 0,
                        'sofa bed': 0,
                        king: 0,
                        'small double': 0,
                        couch: 0
                    }
                })
            }

        };
        setBedroomDetails(arr)

    }, [counts.bedrooms]);



    return (
        /* @ts-ignore */
        <contextObject.Provider value={{
            counts, setCounts,
            location, setLocation,
            selectedDescriptor, setSelectedDescriptor,
            tone, setTone, 
            isActionBoxOpen, 
            onActionBoxToggle,
            allProgress,  setAllProgress,
            selectedPropertyType, setSelectedPropertyType,
            selectedActivities, setSelectedActivities,
            selectedAmentities, setSelectedAmenities,
            currentStep, setCurrentStep,
            bedroomDetails, setBedroomDetails,
            tvState, setTvState,
            sharedWith, setSharedWith
        }}>
            {children}
        </contextObject.Provider>
    )

};


const  useOnboardingContext = () => {
    const context = useContext(contextObject);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
      }
      return context
};


export {
    OnboardingContextProvider,
    useOnboardingContext
}