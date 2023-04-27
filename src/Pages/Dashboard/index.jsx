import { getUsers, getActivity, getSessions, getPerf } from "../../Service/Api/GetDatas";
import { formatActivityData, formatSessions, formatPerf, formatUserInfos} from "../../Service/formateur/formaDatas";
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
//import UserInfos from "../../components/UserInfos";

/*{     <UserInfos 
  keyData={'calorie'}
  value={userKey.calories}/>  }*/




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
            const formatedUserInfos= formatUserInfos(userResponse)
            setInfos(formatedUserInfos)
          
          
            
            
         
           

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
 
    
      console.log('test user format')
      console.log(userData)
      
    return(

        <div className="bg-light dashboard">
                <section>
                  <SideBar/>
                </section>
                <main className="dashboard-body">
                  <Banner data={userData.firstName}/>
                  <div className="dashboard-data-section">
                    <section className="dashboard-chart-section">
                      <ActivityChart data={activityData}/>
                      <div className="dashboard-chart-group">
                        <LinearChart data={sessionsData}/>
                        <PerfRadar data={perfData}/>
                        <RadialChart data={userData.todayScore}/>
                      </div>
                    </section>
                    <section className="dashboard-infos-section">
                      <UserInfos keyData={'calories'} value={userData.calories}/>
                      <UserInfos keyData={'protéines'} value={userData.proteins}/>
                      <UserInfos keyData={'glucides'} value={userData.glucides}/>
                      <UserInfos keyData={'lipides'} value={userData.lipides}/>
                    </section>
                  </div>
                </main>
        </div>
    )
}