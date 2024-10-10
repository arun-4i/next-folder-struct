import { axiosInstance } from "@/api/axios";

export const getCountryDetails = async (countryName: string) => {
    const response = await axiosInstance.get(`/${countryName}`);
    return response.data;
};