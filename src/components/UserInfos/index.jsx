import calorieIcon from '../../assets/icons/calories-icon.png'
import glucidesIcon from '../../assets/icons/carbs-icon.png'
import lipidesIcon from '../../assets/icons/fat-icon.png'
import proteinIcon from '../../assets/icons/protein-icon.png'
import './userInfos.css'

export default function UserInfos({keyData, value}){



    let title = ''
    let icon = ''
    


        switch(keyData){
           case 'calories':
             title = 'Calories'
             icon = calorieIcon
            
            break
            case 'glucides':
                title= 'Glucides'
                icon= glucidesIcon
            break
            case 'protéines':
                title = 'Protéines'
                icon = proteinIcon
            break
            case 'lipides':
                title= 'Lipides'
                icon = lipidesIcon
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