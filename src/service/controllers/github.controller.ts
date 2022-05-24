import { AxiosResponse } from "axios";
import githubApi from "../api/github";

export async function getUser(userName: string) {
    return (await githubApi.get(`/users/${userName}`)).data
}

export async function getRepo(userName: string, repoName: string) {
    return (await githubApi.get(`/repos/${userName}${repoName}`)).data
}