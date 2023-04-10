import { getUsers, getActivity } from "../Service/Api/GetDatas";
import { formatActivityData } from "../Service/formateur/formaDatas";
import { useState } from "react";
import { useEffect } from "react";
import ActivityChart from "../components/Barchart";



export default function Dashboard(){

    const href= window.location.pathname.split('/')[2];
    const userId = parseFloat(href)


    const [ userData, setUserData] = useState([])
    const [ error, setErrorData] = useState([])
    const [activityData, setActivity] = useState([]);
    const [sessionsData, setSessions] = useState([]);
    const [perfData, setPerf] = useState([]);
    

    useEffect(() => {
        const fetchDatas = async () => {
          try {
            const userResponse = await getUsers(userId);
            setUserData(userResponse)

            const activityResponse = await getActivity(userId);
            console.log(activityResponse)
            const formatedActivity = formatActivityData(activityResponse)
           
            setActivity(formatedActivity);
            

          } catch(err){
            setErrorData(err)
          }
        }
    
        fetchDatas()
      }, [userId]);

    
      
    return(

        <div className="bg-light">
          
                <h2>Bonjour {userData._firstName} {userData._lastName}</h2>
                <section>
                <ActivityChart data={activityData}/>
                </section>
                <section>

                </section>

           
        </div>
    )
}