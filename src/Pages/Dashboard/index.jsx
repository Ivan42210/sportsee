import { getUsers, getActivity, getSessions, getPerf } from "../../Service/Api/GetDatas";
import { formatActivityData, formatSessions, formatPerf} from "../../Service/formateur/formaDatas";
import { useState } from "react";
import { useEffect } from "react";
import './Dashboard.css'
import ActivityChart from "../../components/Barchart";
import LinearChart from "../../components/LinearChart";
import PerfRadar from "../../components/RadarChart";

import Banner from "../../components/Banner";
import UserInfos from "../../components/UserInfos";
import RadialChart from "../../components/RadialChart";
import SideBar from "../../components/SideBar";
import { Navigate } from "react-router";



/**
 * Dashboard component to display user data.
 * @function Dashboard
 * @returns {JSX.Element} The JSX element representing the Dashboard component.
 */



export default function Dashboard(){

    const href= window.location.pathname.split('/')[2];
    const userId = parseFloat(href)

    if(!userId){
      return <Navigate to={'*'}/>
    }


    const [userData, setInfos] = useState([])
    
    const [ error, setErrorData] = useState([])
    const [activityData, setActivity] = useState([]);
    const [sessionsData, setSessions] = useState([]);
    const [perfData, setPerf] = useState([]);
   
   
    

    useEffect(() => {
        const fetchDatas = async () => {
          try {
            const userResponse = await getUsers(userId);
            setInfos(userResponse)
        

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

    
    
      console.log(error)
     
      
    return(

        <div className="bg-light dashboard">
               
                <main className="dashboard-body">
                  <Banner data={userData._firstName}/>
                  <div className="dashboard-data-section">
                    <section className="dashboard-chart-section">
                      <ActivityChart data={activityData}/>
                      <div className="dashboard-chart-group">
                        <LinearChart data={sessionsData}/>
                        <PerfRadar data={perfData}/>
                        <RadialChart data={userData._todayScore}/>
                      </div>
                    </section>
                    <section className="dashboard-infos-section">
                    <UserInfos keyData={'calories'} data={userData._calories}/>
                      <UserInfos keyData={'protéines'} data={userData._proteines}/>
                      <UserInfos keyData={'glucides'} data={userData._glucides}/>
                      <UserInfos keyData={'lipides'} data={userData._lipides}/>
                    </section>
                  </div>
                </main>
                <section>
                  <SideBar/>
                </section>
        </div>
    )
}


