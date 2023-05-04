//import UserInfos from "../UserInfos"

import { formatUserInfos } from "../../Service/formateur/formaDatas";

export default function UserSection(datas){

    const formatDatas = formatUserInfos(datas);

    console.log('UserInfos')
    console.log(formatDatas)
    return(
        <>
            
        </>
    )


}

/*
 <UserInfos /> 
*/