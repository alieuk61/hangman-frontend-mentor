// imports
import '../../scss/pages/_categoriespage.scss';
import * as data from '../../JSON/data.json';
import BackButton from '../../components/backbutton';
import { useParams, Link } from 'react-router-dom';

export default function CategoriesPage () {

    return(
        <main className="categories-page">
            <header>
                <div className='backbutton__div'>
                    <Link to='/'>
                    <BackButton />
                    </Link>
                </div>
                <h1 className='categories__title'>Categories Page</h1>
            </header>

            <div className='categories__div'>
                    {Object.keys(data.categories).map((cat, index) => {
                        return(
                                <div key={index}>
                                <Link to={`/Categories/${cat}`} className='router__link'>
                                    <h4>{cat}</h4>
                                </Link>
                                </div>
                        )
                    })}
            </div>
        </main>
    )
}