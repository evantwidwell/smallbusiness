import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';


const Listing = (props) => {
    const id = props.match.params.id
    const l1 = props.listings.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{l1.name}</h2>
                {
                    Object.keys(l1).map((key, idx) => {
                        return <Chip label={`${key}: ${l1[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Listing