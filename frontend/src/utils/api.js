class Api {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkResponse(res) { return res.ok ? res.json() : Promise.reject }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse);
  }

  getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse);
  }

  setUserInfo(userData, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        name: userData.name,
        about: userData.info
      })
    })
      .then(this._checkResponse)
  }

  setAvatar(userData, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        avatar: userData.avatar
      })
    })
      .then(this._checkResponse)
  }

  addCard(userData, token) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        name: userData.title,
        link: userData.link
      })
    })
      .then(this._checkResponse)
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }

  setLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }

  deleteLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'https://api.lazya.nomoredomainsmonster.ru',
});

export default api;