import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 0 auto;
`

const HotspotList = () => {
    return (
        <Wrapper>
            <h3>List of hotspots</h3>
            <ul>
                <li><p>Hotspot #1</p> <a>Delete</a></li>
            </ul>
        </Wrapper>
    )
}

export default HotspotList