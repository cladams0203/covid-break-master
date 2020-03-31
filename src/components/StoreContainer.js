import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StoreCategory from './StoreCategory'
import Styled from "styled-components"
import Video from "../media/Technology.mp4"
import { PartContext } from "../context/PartContext"

//Styling
const VideoBackground = Styled.div`
display: flex;
Overflow:hidden;
`

const ContainerDiv = Styled.div`
margin:14% 0 0 2%;
display:flex;
width: 100%;
`

const SuperLink = Styled(Link)`
text-decoration: none;
color:white;
font-family: Poppins;
weight:600;
`
const LinkDiv = Styled.div`
width: 14%;
border-right: .5px solid rgba(66, 88, 255, 0.67);
border-left: .5px solid rgba(66, 88, 255, 0.67);
background-color: ${props => props.color};
`
const colors = ["rgba(217, 66, 255, 0.67)", "rgba(66, 88, 255, 0.67)", "rgba(66, 186, 255, 0.67)", "rgba(29, 185, 175, 0.67)", "rgba(138, 185, 29, 0.67)", "rgba(73, 29, 185, 0.67)", "rgba(127, 167, 235, 0.67)"]




export default function StoreContainer() {
    const { parts } = useContext(PartContext)
    const categories = []
    for (let obj in parts) {
        categories.push({ name: obj, image: parts[obj][0].url })
    }
    console.log(categories)
    return (
        <VideoBackground>
            <video style={{ zIndex: -1, position: "fixed", width: "100%" }} autoPlay loop muted>
                <source src={Video} type='video/mp4' />
            </video>
            <ContainerDiv>
                {categories.map((item, index) => {
                    return (
                        <LinkDiv color={colors[index]}>
                            <SuperLink to={`/category/${index}`} key={index}>
                                <StoreCategory name={item.name} image={item.image} id={index} />
                            </SuperLink>
                        </LinkDiv>
                    )
                })}
            </ContainerDiv>
        </VideoBackground>
    )
}