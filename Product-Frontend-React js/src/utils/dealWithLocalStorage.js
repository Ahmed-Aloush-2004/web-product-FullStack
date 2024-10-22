export function setTokenToLocalStorage(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem("token");
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem("token");
}