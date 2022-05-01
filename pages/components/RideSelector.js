import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = ({pickUpCoordinates, dropoffCoordinates}) => {
    const [rideDuration, setRideDuration ]= useState(0);


    useEffect(()=>{
       

        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1Ijoic3ViaGFkYXMiLCJhIjoiY2wweTdmMno3MGQ4czNwbzF3dGc0bzEwaiJ9.TwW7szCMCHXTO1EQ5-HAyA",
        })
    )

    }, [])

    
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
            <CarList>
                { carList.map((car, index)=>(
                    <Car
                    key={index}
                    >
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                )) }
            </CarList>
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Price = tw.div`
text-sm
`

const Time = tw.div`
text-xs text-blue-500
`

const Service = tw.div`
font-medium
`

const CarDetails = tw.div`
flex-1
`

const CarImage = tw.img`
h-14 mr-4
`

const Car = tw.div`
flex items-center p-4
`

const CarList = tw.div`
flex-1  overflow-y-scroll
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
flex flex-col overflow-y-scroll
`