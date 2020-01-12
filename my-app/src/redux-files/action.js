import {LOGIN, SIGNUP, UPDATECUST, UPDATEREST} from "./constants";
export function login(data) {
  console.log("login 'action'")
  return { type: LOGIN, data };
}
export function signup(data) {
  console.log("signup 'action'")
  return { type: SIGNUP, data };
}
// export function updateCust(data) {
//   console.log("update 'action'")
//   let token=localStorage.getItem('bearer-token');
//         axios.defaults.withCredentials = true;//very imp, sets credentials so that backend can load cookies
//         axios.post(hostedAddress+':3001/showCustProfile',data, {params:{},headers:{'Authorization':token, 'Accept':'application/json','Content-Type':'application/json'}})
//                 .then((response) => {
//                   dispatch(response)
//             });
//   return { type: UPDATECUST, data };
// }
export function updateRest(data) {
  console.log("update 'action'")
  return { type: UPDATEREST, data };
}