import PropTypes from 'prop-types'
import calorieIcon from '../../assets/icons/calories-icon.png'
import glucidesIcon from '../../assets/icons/carbs-icon.png'
import lipidesIcon from '../../assets/icons/fat-icon.png'
import proteinIcon from '../../assets/icons/protein-icon.png'
import './userInfos.css'

export default function UserInfos({keyData, value}){



    let title = ''
    let icon = ''
    let objValue = ''
    


        switch(keyData){
           case 'calories':
             title = 'Calories'
             icon = calorieIcon
             objValue = `${value} kCal`
            
            break
            case 'glucides':
                title= 'Glucides'
                icon= glucidesIcon
                objValue = `${value} g`
            break
            case 'protéines':
                title = 'Protéines'
                icon = proteinIcon
                objValue = `${value} g`
            break
            case 'lipides':
                title= 'Lipides'
                icon = lipidesIcon
                objValue = `${value} g`
            break
        }
    
   
    
    return(
        <article className="user-info-container">
            <img className='infos-icon' src={icon} alt={title} />
                <div className='infos-body'>
                    <p>{objValue}</p>
                    <span>{title}</span>
                </div>
        </article>
    )
}

UserInfos.propTypes = {
    value: PropTypes.number,
    keyData: PropTypes.string
}