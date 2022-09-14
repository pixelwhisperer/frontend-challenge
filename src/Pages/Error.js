import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from "@material-ui/core";

export default function Error() {
    return (
        <>
            <div className='container'>
                <h1>Error</h1>
                <CancelIcon/>
                <p>Uh oh, something went wrong. Please try again later.</p>
                <Link to="/">
                    <Button variant="outlined">Restart</Button>
                </Link>
            </div>
        </>
    )
}