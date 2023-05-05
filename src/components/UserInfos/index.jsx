import PropTypes from 'prop-types'
import calorieIcon from '../../assets/icons/calories-icon.png'
import glucidesIcon from '../../assets/icons/carbs-icon.png'
import lipidesIcon from '../../assets/icons/fat-icon.png'
import proteinIcon from '../../assets/icons/protein-icon.png'
import './userInfos.css'

/**
 * UserInfos component that displays information about the user's calorie, glucides, protéines, or lipides intake.
 * @param {object} props - The props object containing the following properties:
 * @param {string} props.keyData - The type of data to be displayed. Can be 'calories', 'glucides', 'protéines', or 'lipides'.
 * @param {number} props.data - The value of the data to be displayed.
 * @returns {JSX.Element} - A React component that displays the given user information.
 */

export default function UserInfos({keyData,data}){

    let title = ''
    let icon = ''
    let value = ''
    
        switch(keyData){
           case 'calories':
             title = 'Calories'
             icon = calorieIcon
             value = `${data} kCal`
            
            break
            case 'glucides':
                title= 'Glucides'
                icon= glucidesIcon
                value = `${data} g`
            break
            case 'protéines':
                title = 'Protéines'
                icon = proteinIcon
                value = `${data} g`
            break
            case 'lipides':
                title= 'Lipides'
                icon = lipidesIcon
                value = `${data} g`
            break
        }
  
   
    
    return(
        <article className="user-info-container">
            <img className='infos-icon' src={icon} alt={title} />
                <div className='infos-body'>
                    <p>{value}</p>
                    <span>{title}</span>
                </div>
            
        </article>
    )
}

UserInfos.propTypes = {
    keyData : PropTypes.string,
    data : PropTypes.number,
}

