import './Banner.css'
import PropTypes from 'prop-types'

/*{  }*/

export default function Banner({data}){
   
    return(
        <section className='banner'>
            
             <h2 className="banner-title">Bonjour <span>{data}</span></h2>
            <h3 className='banner-text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </section>
    )
}

Banner.PropTypes = {
    data: PropTypes.string
}