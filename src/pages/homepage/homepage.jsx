import '../../scss/pages/_homepage.scss';
import ButtonBackground from '../../components/buttonbackground';
import HangmanLogo from '../../assets/images/hangman-logo';
import { Link } from 'react-router-dom';

export default function HomePage () {

    return(
        <main className='homepage'>
            <div className='start__div'>
                <HangmanLogo />
                <ButtonBackground /> 
                {/* get rid of this ^^ and replace it with the code of the button background, we will just have the button as another component as we want to add a link to the component, or maybe we can set the is paused to homepage, so that we can direct to categories page is on homepage other wise we will stay in the same page */}
            </div>
        </main>
    )
}