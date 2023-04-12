const formatActivityData = (data) => {

    const sessions = data._sessions.map((session, index) => {



        return {
            day: index + 1,
            date: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }
    });
    console
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

const formatKeyData = (data) => {

    const keyDatasResult = data._keyData.map(key => {

        console.log(key)
        return {
            Calories: key.calorieCount,
            Protéines: key.proteinCount,
            Lipides: key.lipidCount,
            Glucides: key.carbohydrateCount
        }

    })

    // return keyDatasResult
}

export { formatActivityData, formatSessions, formatPerf, formatKeyData }