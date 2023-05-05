
import './Banner.css'
import propTypes from 'prop-types'


/**
 * Banner component to display a congratulatory message with a personalized name.
 * @param {Object} props - The props for the component.
 * @param {string} props.data - The name to display in the message.
 * @returns {JSX.Element} - The Banner component.
 */

export default function Banner({data}){

    
   
    return(
        <section className='banner'>
            
             <h2 className="banner-title">Bonjour <span>{data}</span></h2>
            <h3 className='banner-text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </section>
    )
}

Banner.propTypes = {
    data: propTypes.string
}