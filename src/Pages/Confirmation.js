import React, { useState } from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TextField, Button } from "@material-ui/core";

export default function  Confirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState(location.state.data)
    
    function submitForm(formData) {
        const submitFormData = async() => 
        {
            setIsLoading(true);
            const response = await fetch('http://localhost:3001/api/submit', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const responseData = await response
            if(responseData.status === 200) {
                navigate('/success')
                setIsLoading(false);
            } else {
                navigate('/error')
                setIsLoading(false);
            }
        }
        submitFormData();
    }

    const handleSubmit = () => {
        submitForm(data);
    }
    
    
    return(
        <div className="container">
            <h1>Confirmation</h1>

            {isLoading ? <CircularProgress/> : (
                <>
                    <ul>
                        {data &&
                            <>
                                <li>First Name: {data.name}</li>
                                <li>E-mail: {data.email}</li>
                                <li>Password: <TextField type="password" value={data.password} disabled/></li>
                                <li>Favorite Color: {data.color}</li>
                                <li>Terms and Conditions: {data.terms ? 'Agreed' : 'Disagreed'}</li>
                            </>
                        }
                    </ul>
                    <div>
                        <Link to="/more-info" state={{data}} >
                            <Button variant="outlined">Back</Button>
                        </Link>
                        
                        <Button variant="outlined" type="submit" onClick={handleSubmit}>Submit</Button>
                    </div>
                </>
                )
            }

            
        </div>
    )
}