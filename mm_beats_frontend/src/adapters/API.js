import { SERVER_STATUS_MESSAGES } from "../config/constants"
import { errorHandler } from "../config/errors/errorHandler"

// allows API to set cookie in client
const cookiePermission = { withCredentials: true }

async function makeRequest(method, url, body = "") {
  let result
  const config = buildConfig(method, body)

  try {
    result = await fetch(url, config, cookiePermission)
    result = result.json()
  } catch(e) {
    result = this.handleRejction(e)
  }

  return result
}

const buildConfig = (method, body = "") => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  if (body) config["body"] = JSON.stringify(body)

  return config
}

const handleRejection = e => {
  if (Object.values(SERVER_STATUS_MESSAGES).includes(e.message)) {
    return throwError(e)
  } else {
    return e.json()
  }
}

const throwError = e => {
  return errorHandler(e)
}

const API = {
  makeRequest,
  handleRejection,
  throwError
}

export default API
