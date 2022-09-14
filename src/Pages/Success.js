import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from "@material-ui/core";

export default function Success() {
    return (
        <>
            <div className='container'>
                <h1>Success!</h1>
                <CheckCircleOutlineIcon/>
                <p>You should receive a confirmation email soon.</p>
                <Link to="/">
                    <Button variant="outlined">Restart</Button>
                </Link>
            </div> 
        </>
    )
}