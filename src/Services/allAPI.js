import { commonAPI } from "./commonAPI";
import {server_url} from'./server_url.js';

// upload video api

export const uploadVideoAPI= async(video) =>{
    return await commonAPI('POST',`${server_url}/allVideos`,video)
}

// // GET All upload videos
export const getAllUploadVideoAPI= async() =>{
    return await commonAPI ('GET',`${server_url}/allVideos`,"")
}

// // GETAvideos
export const getAVideoAPI= async(id) =>{
    return await commonAPI ('GET',`${server_url}/allVideos/${id}`,"")
}
// // delete video api
export const deleteVideoAPI= async(id) =>{
    return await commonAPI('DELETE',`${server_url}/allVideos/${id}`,{})
}

//add watchhistory
export const addHistoryAPI= async(video) =>{
    return await commonAPI('POST',`${server_url}/history`,video)
}
//gethistoryAPI
export const getHistoryAPI= async() =>{
    return await commonAPI('GET',`${server_url}/history`,"")
}
//deletehistoryAPI
export const deleteHistoryAPI= async(id) =>{
    return await commonAPI('DELETE',`${server_url}/history/${id}`,{})
}

// add categoryAPI
export const addCategoryAPI= async(category) =>{
    return await commonAPI('POST',`${server_url}/category`,category)
}
// getcategoryAPI
export const getCategoryAPI= async() =>{
    return await commonAPI('GET',`${server_url}/category`,"")
}
// deletecategoryAPI
export const deleteCategoryAPI= async(id) =>{
    return await commonAPI('DELETE',`${server_url}/category/${id}`,{})
}
// updateCategoryAPI

export const updateCategoryAPI=async(id,categoryDetails) =>{
    return await commonAPI('PUT',`${server_url}/category/${id}`,categoryDetails)
}