import axios from "axios";
import { datas } from "../data/mockedDatas";
import { usersModel } from "../../models/User";
import { activityModel } from "../../models/Activity";
import { performanceModel } from "../../models/Perfomance";





const getUsers = async(typeData, userId) => {
    if (typeData === 'url') {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}`)
            const data = response.data.data
            return new usersModel(data)
        } catch (error) {
            return error
        }
    } else if (typeData === 'mocked') {
        const userDatas = datas[0].users.find(id => id = userId);
        const userMod = new usersModel(userDatas);

        return userMod;

    }
}

const getActivity = async(typeData, userId) => {
    if (typeData === 'url') {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/activity`)
            const data = response.data.data;

            return new activityModel(data)

        } catch (error) {
            return error
        }
    } else if (typeData === 'mocked') {
        const userDatas = datas[0].activity.find(userId => userId = userId);
        const userMod = new activityModel(userDatas);

        return userMod;

    }
}

const getSessions = async(typeData, userId) => {
    if (typeData === 'url') {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
            const data = response.data.data;

            return data

        } catch (error) {
            return error
        }
    } else if (typeData === 'mocked') {
        const userDatas = datas[0].sessions.find(userId => userId = userId);
        const userMod = userDatas;

        return userMod;

    }
}

const getPerf = async(typeData, userId) => {
    if (typeData === 'url') {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/performance`)
            const data = response.data.data;

            return new performanceModel(data)

        } catch (error) {
            return error
        }
    } else if (typeData === 'mocked') {
        const userDatas = datas[0].perf.find(userId => userId = userId);
        const userMod = new performanceModel(userDatas);

        return userMod;

    }
}

export { getUsers, getActivity, getSessions, getPerf };