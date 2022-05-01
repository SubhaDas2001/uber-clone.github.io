import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map";
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector';
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log("Pickup", pickup);
    console.log("Dropoff", dropoff);

    const [pickUpCoordinates, setPickupCoordinates] = useState([0,0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);

    const getPickUpCoordinates = (pickup) => {
        const pickUp = "Santa Monica";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic3ViaGFkYXMiLCJhIjoiY2wweTdmMno3MGQ4czNwbzF3dGc0bzEwaiJ9.TwW7szCMCHXTO1EQ5-HAyA",
                limit: 1
            })
        )
            .then((response) => {
                return response.json();
            }).then(data => {
                setPickupCoordinates(data.features[0].center)
            })
    }

    const getDropoffCoodrinates = (dropoff) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic3ViaGFkYXMiLCJhIjoiY2wweTdmMno3MGQ4czNwbzF3dGc0bzEwaiJ9.TwW7szCMCHXTO1EQ5-HAyA",
                limit: 1
            })
        )
            .then((response) => {
                return response.json();
            }).then(data => {
                setDropoffCoordinates(data.features[0].center)
            })

    }

    useEffect(() => {
        getPickUpCoordinates(pickup);
        getDropoffCoodrinates(dropoff);
    }, [pickup, dropoff])
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton
                        src='https://img.icons8.com/ios-filled/50/000000/left.png'
                    />
                </Link>
            </ButtonContainer>
            <Map
                pickUpCoordinates={pickUpCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector
                 pickUpCoordinates={pickUpCoordinates}
                 dropoffCoordinates={dropoffCoordinates}
                 />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain 
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`


const ConfirmButton = tw.div`
bg-black text-white text-center py-4 mx-4 my-4 text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const Wrapper = tw.div`
flex flex-col h-screen
`