import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import '../App.css'
 
const Dashboard = (props) => {
    
    console.log(document.cookie);
    console.log(props)
    if(document.cookie){
    return (
        <Container maxWidth="lg" className="car-container">
            
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        <TableCell component="th" scope="row">
                            {listing.id}
                        </TableCell>
                        <TableCell>
                           
                        <Link to={`/listing/${listing.id}`}>{listing["name"]}</Link> 
                            </TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        <TableCell>{listing["address"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={()=>props.removeListing(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )} else {
        return (
            <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user.userName}</h4>
            <div className="flex-container">
               
               
                {/* <AddListing carTotal={props.cars.length} /> */}
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        <TableCell component="th" scope="row">
                            {listing.id}
                        </TableCell>
                        <TableCell>{listing["name"]}</TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        <TableCell>{listing["address"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        
                        
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
        )

    }
}

export default Dashboard