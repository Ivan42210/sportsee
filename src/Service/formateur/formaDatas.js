/**
 * Formats the score data.
 *
 * @param {number} data - The raw score data.
 * @returns {Array} - An array of objects containing formatted score data.
 */

const formatScore = (data) => {
    return [{
        score: data * 100,
        fill: '#ff0000',
    }]
}



/**
 * Formats the activity data.
 *
 * @param {object} data - The raw data.
 * @returns {Array} - An array of objects containing formatted activity data.
 */


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



/**
 * Formats the sessions data.
 *
 * @param {object} data - The raw data.
 * @returns {Array} - An array of objects containing formatted sessions data.
 */

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


/**
 * Formats the performance data.
 *
 * @param {object} data - The raw data.
 * @returns {Array} - An array of objects containing formatted performance data.
 */


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