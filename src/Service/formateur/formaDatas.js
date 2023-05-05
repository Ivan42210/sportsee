const formatUserInfos = (datas) => {

    //console.log(datas)
    // const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = datas.datas;

    console.log('formatter')
    console.log(datas.datas.calorieCount)
        //console.log(`calories: ${calorieCount}, protéines: ${proteinCount},  glucides: ${carbohydrateCount}, lipides: ${lipidCount}`)

}

const formatScore = (data) => {
    return [{
        score: data * 100,
        fill: '#ff0000',
    }]
}




const formatActivityData = (data) => {

    const sessions = data._sessions.map((session, index) => {



        return {
            day: index + 1,
            date: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }
    });

    return sessions;
};


const formatSessions = (data) => {

    const dayName = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D",
    }
    const averageSessions = data._sessions.map(session => {
        return {
            day: dayName[session.day],
            duration: session.sessionLength,
        }
    })

    return averageSessions
}

const formatPerf = (data) => {
    const french = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
    }

    const perfResult = data._perfData.map(perf => {
        return {
            value: perf.value,
            kind: french[perf.kind],
        }
    });

    return perfResult
}


export { formatActivityData, formatSessions, formatPerf, formatUserInfos, formatScore }