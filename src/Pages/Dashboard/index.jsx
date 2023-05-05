import { getUsers, getActivity, getSessions, getPerf } from "../../Service/Api/GetDatas";
import { formatActivityData, formatSessions, formatPerf} from "../../Service/formateur/formaDatas";
import { useState } from "react";
import { useEffect } from "react";
import './Dashboard.css'
import ActivityChart from "../../components/Barchart";
import LinearChart from "../../components/LinearChart";
import PerfRadar from "../../components/RadarChart";

import Banner from "../../components/Banner";
//import UserInfos from "../../components/UserInfos";
import RadialChart from "../../components/RadialChart";
import SideBar from "../../components/SideBar";






export default function Dashboard(){

    const href= window.location.pathname.split('/')[2];
    const userId = parseFloat(href)


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
      console.log('test user format')
      console.log(userData)
      
    return(

        <div className="bg-light dashboard">
                <section>
                  <SideBar/>
                </section>
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
                      
                    </section>
                  </div>
                </main>
        </div>
    )
}


/* <UserInfos keyData={'calories'} data={userData._keyData}/>
                      <UserInfos keyData={'protéines'} data={userData._keyData}/>
                      <UserInfos keyData={'glucides'} data={userData._keyData}/>
                      <UserInfos keyData={'lipides'} data={userData._keyData}/>
                      
                       <RadialChart data={userData.todayScore}/>*/