const formatActivityData = (data) => {

    console.log(data)
    const sessions = data._sessions.map(session => {
        return {
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }
    });

    return sessions;
};

export { formatActivityData }