import { AiFillHome, AiOutlineApartment } from 'react-icons/ai';
import { FaPenFancy } from 'react-icons/fa';
import { GiFamilyHouse, GiModernCity, GiVillage } from 'react-icons/gi';
import { SiBandsintown } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSkiing, faWifi, } from '@fortawesome/pro-solid-svg-icons'
import { faTv, faWashingMachine, faCar, faCircleParking, faAirConditioner, faHouseLaptop, faWaterLadder, faHotTubPerson, faJedi, faGrillHot, faUtensils, faFireBurner, faPool8Ball, faFireplace, faPiano, faDumbbell, faWater, faUmbrellaBeach, faShower, faVolcano, faBandage, faFireExtinguisher, faDoorClosed, faSensorTriangleExclamation, faPersonHiking, faLandmarkDome, faPanFood, faMusic, faTrees, faPersonWalking, faPartyHorn, faWineBottle, faPersonSkiingNordic, faBagShopping, faHotTub, faBuildingColumns, faSunrise, faRoute, faMaskSnorkel, faSeedling, faHockeyStickPuck, faFishingRod, faBalloon, faScrollOld, faBikingMountain, faHouseTsunami, faHatCowboySide, faProjector, faTreePalm, faGamepad, faFamily, faHouse, faCabin, faMugHot, faCastle, faHotel, faApartment, faHouseWindow, faFarm, faHouseChimney, faHouseTree, faHouseChimneyWindow } from '@fortawesome/pro-regular-svg-icons'



export const propertyTypeArray = [
    {
        label: 'House',
        icon: <FontAwesomeIcon icon={faHouse} fontSize={'25px'} />
    },
    {
        label: 'Apartment',
        icon: <FontAwesomeIcon icon={faApartment} fontSize={'25px'} />
    },
    {
        label: 'Guesthouse',
        icon: <FontAwesomeIcon icon={faHouseChimneyWindow} fontSize={'25px'} />
    },
    {
        label: 'Hotel',
        icon: <FontAwesomeIcon icon={faHotel} fontSize={'25px'} />
    },
];

export const descriptorArray = [
    {
        label: 'House',
        icon: <FontAwesomeIcon icon={faHouse} fontSize={'25px'} />
    },
    {
        label: 'Apartment',
        icon: <FontAwesomeIcon icon={faApartment} fontSize={'25px'} />
    },
    {
        label: 'Cabin',
        icon: <FontAwesomeIcon icon={faCabin} fontSize={'25px'} />
    },
    {
        label: 'Bed & breakfast',
        icon: <FontAwesomeIcon icon={faMugHot} fontSize={'25px'} />
    },
    {
        label: 'Castel',
        icon: <FontAwesomeIcon icon={faCastle} fontSize={'25px'} />
    },
    {
        label: 'Hotel',
        icon: <FontAwesomeIcon icon={faHotel} fontSize={'25px'} />
    },
    {
        label: 'Tiny home',
        icon: <FontAwesomeIcon icon={faHouseWindow} fontSize={'25px'} />
    },

    {
        label: 'Farm',
        icon: <FontAwesomeIcon icon={faFarm} fontSize={'25px'} />
    },
    {
        label: 'Guest house',
        icon: <FontAwesomeIcon icon={faHouseChimney} fontSize={'25px'} />
    },
    {
        label: 'Tree house',
        icon: <FontAwesomeIcon icon={faHouseTree} fontSize={'25px'} />
    },
];


export const amenitiesArray = [
    {
        label: 'WIFI',
        icon: <FontAwesomeIcon icon={faWifi} fontSize={'25px'} />

    },
    {
        label: 'TV',
        icon: <FontAwesomeIcon icon={faTv} fontSize={'25px'} />
    },
    {
        label: 'Washer',
        icon: <FontAwesomeIcon icon={faWashingMachine} fontSize={'25px'} />
    },
    {
        label: 'Free parking on premises',
        icon: <FontAwesomeIcon icon={faCar} fontSize={'25px'} />
    },
    {
        label: 'Paid parking on premises',
        icon: <FontAwesomeIcon icon={faCircleParking} fontSize={'25px'} />
    },
    {
        label: 'Air conditioning',
        icon: <FontAwesomeIcon icon={faAirConditioner} fontSize={'25px'} />
    },
    {
        label: 'Dedicated workspace',
        icon: <FontAwesomeIcon icon={faHouseLaptop} fontSize={'25px'} />
    },
    {
        label: 'Pool',
        icon: <FontAwesomeIcon icon={faWaterLadder} fontSize={'25px'} />

    },
    {
        label: 'Hot tub',
        icon: <FontAwesomeIcon icon={faHotTubPerson} fontSize={'25px'} />
    },
    {
        label: 'Patio',
        icon: <FontAwesomeIcon icon={faJedi} fontSize={'25px'} />
    },
    {
        label: 'BBQ grill',
        icon: <FontAwesomeIcon icon={faGrillHot} fontSize={'25px'} />
    },
    {
        label: 'Outdoor dining area',
        icon: <FontAwesomeIcon icon={faUtensils} fontSize={'25px'} />
    },
    {
        label: 'Fire pit',
        icon: <FontAwesomeIcon icon={faFireBurner} fontSize={'25px'} />
    },
    {
        label: 'Pool table',
        icon: <FontAwesomeIcon icon={faPool8Ball} fontSize={'25px'} />
    },
    {
        label: 'Indoor fireplace',
        icon: <FontAwesomeIcon icon={faFireplace} fontSize={'25px'} />

    },
    {
        label: 'Piano',
        icon: <FontAwesomeIcon icon={faPiano} fontSize={'25px'} />
    },
    {
        label: 'Exercise equipment',
        icon: <FontAwesomeIcon icon={faDumbbell} fontSize={'25px'} />
    },
    {
        label: 'Lake access',
        icon: <FontAwesomeIcon icon={faWater} fontSize={'25px'} />
    },
    {
        label: 'Beach access',
        icon: <FontAwesomeIcon icon={faUmbrellaBeach} fontSize={'25px'} />
    },
    {
        label: 'Ski-in/Ski-out',
        icon: <FontAwesomeIcon icon={faPersonSkiing} fontSize={'25px'} />
    },
    {
        label: 'Outdoor shower',
        icon: <FontAwesomeIcon icon={faShower} fontSize={'25px'} />
    },
    {
        label: 'Smoke alarm',
        icon: <FontAwesomeIcon icon={faVolcano} fontSize={'25px'} />
    },
    {
        label: 'First aid',
        icon: <FontAwesomeIcon icon={faBandage} fontSize={'25px'} />
    },
    {
        label: 'Fire extinguisher',
        icon: <FontAwesomeIcon icon={faFireExtinguisher} fontSize={'25px'} />
    },
    {
        label: 'Lock on bedroom door',
        icon: <FontAwesomeIcon icon={faDoorClosed} fontSize={'25px'} />
    },
    {
        label: 'Carbon monoxide alarm',
        icon: <FontAwesomeIcon icon={faSensorTriangleExclamation} fontSize={'25px'} />

    },

];



export const activitiesArray = [
    {
        label: 'Hiking',
        icon: <FontAwesomeIcon icon={faPersonHiking} fontSize={'25px'} />
    },
    {
        label: 'Surfing',
        icon: <FontAwesomeIcon icon={faHouseTsunami} fontSize={'25px'} />
    },

    {
        label: 'Landmarks',
        icon: <FontAwesomeIcon icon={faLandmarkDome} fontSize={'25px'} />
    },
    {
        label: 'Food',
        icon: <FontAwesomeIcon icon={faPanFood} fontSize={'25px'} />
    },
    {
        label: 'Music',
        icon: <FontAwesomeIcon icon={faMusic} fontSize={'25px'} />
    },
    {
        label: 'Safari',
        icon: <FontAwesomeIcon icon={faTrees} fontSize={'25px'} />
    },
    {
        label: 'Festivals',
        icon: <FontAwesomeIcon icon={faPartyHorn} fontSize={'25px'} />
    },
    {
        label: 'Walking',
        icon: <FontAwesomeIcon icon={faPersonWalking} fontSize={'25px'} />
    },

    {
        label: 'Wine',
        icon: <FontAwesomeIcon icon={faWineBottle} fontSize={'25px'} />
    },
    {
        label: 'Skiing',
        icon: <FontAwesomeIcon icon={faPersonSkiingNordic} fontSize={'25px'} />
    },


    {
        label: 'Shopping',
        icon: <FontAwesomeIcon icon={faBagShopping} fontSize={'25px'} />
    },
    {
        label: 'Hot Springs',
        icon: <FontAwesomeIcon icon={faHotTub} fontSize={'25px'} />
    },

    {
        label: 'Museums',
        icon: <FontAwesomeIcon icon={faBuildingColumns} fontSize={'25px'} />
    },
    {
        label: 'Sunrise Hike',
        icon: <FontAwesomeIcon icon={faSunrise} fontSize={'25px'} />
    },
    {
        label: 'Scenic Drive',
        icon: <FontAwesomeIcon icon={faRoute} fontSize={'25px'} />
    },

    {
        label: 'Scuba/Snorkel',
        icon: <FontAwesomeIcon icon={faMaskSnorkel} fontSize={'25px'} />
    },
    {
        label: 'Botanical Gardens',
        icon: <FontAwesomeIcon icon={faSeedling} fontSize={'25px'} />
    },
    {
        label: 'Sports',
        icon: <FontAwesomeIcon icon={faHockeyStickPuck} fontSize={'25px'} />
    },

    {
        label: 'Horseback Riding',
        icon: <FontAwesomeIcon icon={faHatCowboySide} fontSize={'25px'} />
    },

    {
        label: 'Fishing',
        icon: <FontAwesomeIcon icon={faFishingRod} fontSize={'25px'} />
    },
    {
        label: 'Hot Air Balloon',
        icon: <FontAwesomeIcon icon={faBalloon} fontSize={'25px'} />
    },

    {
        label: 'Ancient Ruins',
        icon: <FontAwesomeIcon fontSize={'25px'} icon={faScrollOld} />
    },

    {
        label: 'Secluded Beach',
        icon: <FontAwesomeIcon icon={faUmbrellaBeach} fontSize={'25px'} />
    },
    {
        label: 'Theater',
        icon: <FontAwesomeIcon icon={faProjector} fontSize={'25px'} />
    },

    {
        label: 'Bike Tour',
        icon: <FontAwesomeIcon fontSize={'25px'} icon={faBikingMountain} />
    },

    {
        label: 'Resort Access',
        icon: <FontAwesomeIcon icon={faTreePalm} fontSize={'25px'} />
    },
    {
        label: 'Games',
        icon: <FontAwesomeIcon icon={faGamepad} fontSize={'25px'} />
    },

    {
        label: 'Family Activities ',
        icon: <FontAwesomeIcon fontSize={'25px'} icon={faFamily} />
    },
];


export const tvConfig = [24, 32, 40, 55, 60, 65, 70, 75, 82];
export const bedConfig = ['double', 'queen', 'single', 'Sofa bed', 'king', 'small double', 'Couch'];