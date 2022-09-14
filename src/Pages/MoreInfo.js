import React, { useEffect, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLocation, Link } from 'react-router-dom';
import { Select, Button, Checkbox } from "@material-ui/core";

export default function MoreInfo() {
    const location = useLocation();
    const [colors, setColors] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(location.state.data);
    
    async function getColors() {
        setIsLoading(true);
        const response = await fetch('http://localhost:3001/api/colors');
        const colors = await response.json();
        if(colors){setIsLoading(false)}
        return colors
    }

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value 
        })
    }
  
    const {color, terms} = data
   
    useEffect(()=>{
        async function retrieveColors() {
            const response = await getColors();
            setColors(response)
        }
        retrieveColors();
    },[])

    return(
        <div className="container">
            <h1>Additional Info</h1>
            {isLoading ? <CircularProgress/> : (
                    <>
                        <Select 
                        name="color"
                        defaultValue={'Select your favorite color'} 
                        onChange={e=>updateData(e)}
                        >
                            <option disabled value="Select your favorite color">Select your favorite color</option>
                            {colors && colors.map((color, index)=><option key={index} value={color}>{color}</option>)}     
                        </Select>

                        <div>
                            <Checkbox 
                                type="checkbox" 
                                name="terms"
                                value={terms} 
                                onChange={e=>setData({
                                    ...data,
                                    [e.target.name]: e.target.checked ? true : false 
                                })}
                            />
                            <span>I agree to <Link to="/">terms and conditions</Link></span>
                        </div>                           
                    </>
                )
            }

            <div>
                <Link to="/" state={{data}} >
                    <Button variant="outlined">Back</Button>
                </Link>
                <Link to="/confirmation" state={{data}} >
                    <Button variant="outlined">Next</Button>
                </Link>
            </div>
        </div>
    )
}