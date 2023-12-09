export const BASE_URL = "https://api.lazya.nomoredomainsmonster.ru"

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`)
  }
}

export function register (email, password) {
  return fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => checkResponse(res))
}


export function login(email, password) {
  return fetch(`${BASE_URL}/sign-in`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => checkResponse(res))
}

export function checkToken(userToken) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${userToken}`
    }
  })
    .then(res => checkResponse(res))
}