import axios from 'axios'

import { FAIL_SEND, REQUEST_SEND, SUCCESS_SEND } from '../actiontype/transfer'

const transfer = (amount) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_SEND })
    var options = {
      method: 'GET',
      url: 'https://currency23.p.rapidapi.com/exchange',
      params: { base: 'INR', to: 'USD', int: `${amount}` },
      headers: {
        'x-rapidapi-host': 'currency23.p.rapidapi.com',
        'x-rapidapi-key': 'd63eb01e72mshfdc30c1c2c040e6p101c55jsnc0d029c27b3e',
      },
    }

    const { data } = await axios.request(options)

    dispatch({ type: SUCCESS_SEND, payload: data })
  } catch (err) {
    dispatch({ type: FAIL_SEND, payload: err })
  }
}

export { transfer }
