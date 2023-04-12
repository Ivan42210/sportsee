import { getUsers, getActivity, getSessions, getPerf } from "../Service/Api/GetDatas";
import { formatActivityData, formatSessions, formatPerf } from "../Service/formateur/formaDatas";
import { useState } from "react";
import { useEffect } from "react";
import '../Styles/Dashboard.css'
import SideBar from "../components/SideBar";
import ActivityChart from "../components/Barchart";
import LinearChart from "../components/LinearChart";
import PerfRadar from "../components/RadarChart";



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
            const formatedActivity = formatActivityData(activityResponse) 
            setActivity(formatedActivity);

            const sessionsResponse = await getSessions(userId);
            const formatedSessions = formatSessions(sessionsResponse)
            setSessions(formatedSessions);
    
            const perfResponse = await getPerf(userId);
            const formatedPerf = formatPerf(perfResponse);
            setPerf(formatedPerf)
            

          } catch(err){
            setErrorData(err)
          }
        }
    
        fetchDatas()
      }, [userId]);
 
   
      
    return(

        <div className="bg-light dashboard">
                <section>
                  <SideBar/>
                </section>
                <main className="dashboard-body">
                <h2>Bonjour {userData._firstName} {userData._lastName}</h2>
                <section>
                <ActivityChart data={activityData}/>
                <div>
                  <LinearChart data={sessionsData}/>
                  <PerfRadar data={perfData}/>
                </div>
                </section>
                <section>

                </section>
                </main>

           
        </div>
    )
}