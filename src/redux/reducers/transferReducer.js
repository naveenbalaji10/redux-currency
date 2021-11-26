import { FAIL_SEND, REQUEST_SEND, SUCCESS_SEND } from '../actiontype/transfer'

const transferReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_SEND:
      return {
        loading: true,
      }
    case SUCCESS_SEND:
      return {
        loading: false,
        data: action.payload,
      }
    case FAIL_SEND:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export { transferReducer }
