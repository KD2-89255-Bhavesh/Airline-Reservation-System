import axios from 'axios'
import { config } from '../../../config';

export async function registerUser(
  title,
  firstName,
  lastName,
  email,
  phone,
  password
) {
  try {
    const url = `${config.serverURL}/customer/register`
    const body = {
      title,
      firstName,
      lastName,
      email,
      phone,
      password,
      role
    }
    const response = await axios.post(url, body)

    if (response.status == 200) {
      return response.data
    } else {
      return null
    }
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}


export async function login(email, password) {
  try {
    const url = `${config.serverURL}/customer/login`
    const body = {
      email,
      password,
    }
    const response = await axios.post(url, body)
    if (response.status == 200) {
      return response.data
    } else {
      return null
    }
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}



