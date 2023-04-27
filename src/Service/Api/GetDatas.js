import axios from "axios";
import { datas } from "../data/mockedDatas";
import { mockedData } from "./GetSource";
import { usersModel } from "../../models/User";
import { activityModel } from "../../models/Activity";
import { performanceModel } from "../../models/Perfomance";
import { AverageSession } from "../../models/AverageSession";



let typeData = mockedData

/**
 * Retrieves user data from API or mocked data
 * @function getUsers
 * @async
 * @param {number} userId 
 * @returns {Promise<usersModel|Error>} - Promise containing a usersModel object or an error
 */

const getUsers = async(userId) => {

    if (typeData === false) {

        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}`)
            const data = response.data.data
            console.log('userDatas infos')
            console.log(data)
            return new usersModel(data)

        } catch (error) {
            return error
        }
    } else {
        const user = datas[0].users.find(u => u.id === userId);
        const userMod = new usersModel(user);

        return userMod;

    }
}

/**
 * Retrieves user activity data from API or mocked data
 * @function getActivity
 * @async
 * @param {number} userId 
 * @returns {Promise<activityModel|Error>} - Promise containing an activityModel object or an error
 */

const getActivity = async(userId) => {
    if (typeData === false) {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/activity`)
            const data = response.data.data;

            return new activityModel(data)


        } catch (error) {
            return error
        }
    } else {

        const user = datas[0].activity.find(ac => ac.userId === userId)

        const userMod = new activityModel(user);

        return userMod;

    }
}


/**
 * Retrieves user session data from API or mocked data
 * @function getSessions
 * @async
 * @param {number} userId 
 * @returns {Promise<AverageSession|Error>} - Promise containing an AverageSession object or an error
 */

const getSessions = async(userId) => {
    if (typeData === false) {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
            const data = response.data.data;

            return new AverageSession(data)

        } catch (error) {
            return error
        }
    } else {
        const user = datas[0].sessions.find(u => u.userId === userId)
        const userMod = new AverageSession(user);

        return userMod;

    }
}

/**
 * Retrieves user performance data from API or mocked data
 * @function getPerf
 * @async
 * @param {number} userId 
 * @returns {Promise<performanceModel|Error>} - Promise containing a performanceModel object or an error
 */

const getPerf = async(userId) => {
    if (typeData === false) {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/performance`)
            const data = response.data.data;

            return new performanceModel(data)

        } catch (error) {
            return error
        }
    } else {
        const user = datas[0].perf.find(u => u.userId === userId)
        const userMod = new performanceModel(user);

        return userMod;

    }
}

export { getUsers, getActivity, getSessions, getPerf };