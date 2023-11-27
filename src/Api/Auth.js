import { axiosSecure } from "../Hooks/useAxiosSecure"

export const becomeHost = async email => {
    const currentUser = {
      email,
      status: 'Requested',
    }
    const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
    return data
  }