import '../scss/components/_button-background.scss';
import Button from './button';
import { Link } from 'react-router-dom';
import { myContext } from '../context/context';
import { useContext } from 'react';


export default function ButtonBackground () {

    const {isPaused} = useContext(myContext)

    return(
        <div className="button__background">
            <Link to={isPaused == 'Homepage' ? '/Categories' : null}>
                <Button />
            </Link>
            <Link to='/Guide' >
                <div className='how-to-button'>
                    <h4>How To Play</h4>
                </div>
            </Link>
        </div>
    )
}