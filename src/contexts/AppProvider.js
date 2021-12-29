import React, { createContext, useState } from 'react';
import axios from 'axios'

export const APPContext = createContext();
export const APPProvider = (props) => {
    const [user, setUser] = useState(null);

    //API CALLING
    const baseURL = "https://jsonplaceholder.typicode.com/"

    const webServices = {
        getUsers: baseURL + 'users'
    }

    const getAllUSers = async () => {
        let url = webServices.getUsers;
        return await request(url, 'get', {})
    }

    const request = async (url, method, params) => {
        try {
            var response = await axios({
                method: method,
                url: url,
                data: params,
                headers: {
                    'Authorization': user ? `Bearer ${user.access_token}` : ''
                },
            });

            const data = getResponse(response);
            // console.log("data", data);
            return data
        }
        catch (e) {
            console.log(e)
            return getError(e)
        }
    }

    const getResponse = (response) => {
        // console.log("JSON.stringify",JSON.stringify(response.data))

        if (response.data && response.data.success == false) {
            let result = {
                status: false,
                data: response.data.message,
                error: response.data.message
            }
            return result
        }
        else {

            let data = response.data

            return data

            
        }
    }

    const getError = (error) => {
        var message = ""
        if (error.response) {
            if (error.response.data) {
                console.log(error.response.data)
                if (error.response.data.msg) {
                    message = error.response.data.msg
                }
                else {
                    message = JSON.stringify(error.response.data)
                }
            }
            else {
                console.log(error.response)
                message = "Something went wrong"
            }
        }
        else {
            console.log(error)
            message = error.message
        }

        let data = {
            status: false,
            result: null,
            error: message
        }
        return data
    }

    return (
        <APPContext.Provider
            value={{
                getAllUSers
            }}>
            {props.children}
        </APPContext.Provider>
    )

}





// const searchCategory = async (search) => {
//     let url = webServices.search_subcategory + "/" + search
//     return await request(url, 'get', {})
// }

// const getHome = async (lang_code, mood) => {
//     let params = {
//         lang_code: lang_code,
//         mood: mood
//     }
//     return await request(webServices.home, 'post', params)
// }
// const getSubCategory = async (ids, limit, emotion_id) => {
//     let string = webServices.subCategories + ids + "/" + "subcategories"
//     let params = {
//         limit: limit,
//         emotion_id: emotion_id
//     }
//     return await request(string, 'post', params)
// }
// const getMind = async (limit, emotion_id) => {
//     let params = {
//         limit: limit,
//         emotion_id: emotion_id
//     }
//     return await request(webServices.mind, 'post', params)
// }
