const formatUserInfos = (data) => {


    return {

        firstName: data._firstName,
        id: data._id,
        lastName: data._lastName,
        age: data._age,
        todayScore: { name: 'score', score: data._todayScore * 100, fill: 'var(--danger)' },
        calories: data._keyData.calorieCount,
        glucides: data._keyData.carbohydrateCount,
        lipides: data._keyData.lipidCount,
        proteins: data._keyData.proteinCount

    }

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


export { formatActivityData, formatSessions, formatPerf, formatUserInfos }