import axios from "axios";
import { datas } from "../data/mockedDatas";
import { mockedData } from "./GetSource";
import { usersModel } from "../../models/User";
import { activityModel } from "../../models/Activity";
import { performanceModel } from "../../models/Perfomance";
import { AverageSession } from "../../models/AverageSession";

let typeData = mockedData



const getUsers = async(userId) => {
    if (typeData === false) {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}`)
            console.log(response)
            const data = response.data.data
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
        console.log('check getsessions')
        console.log(user)
        return userMod;

    }
}

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