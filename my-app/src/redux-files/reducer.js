import { LOGIN, SIGNUP, UPDATECUST, UPDATEREST } from "./constants";
import axios from "axios";
import cookie from "react-cookies";


const initialState = {
  data: [],
};
// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_BOOK) {
//     state.books.push(action.payload);
//   }
//   return state;
// }
function newReducer(state = initialState, action) {
    if (action.type === LOGIN) {
      console.log("processing in reducer-login");
      console.log(action.data);
      // return Object.assign({}, state, {
      //   data: state.data.concat(action.data)
      // });
      axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post("http://localhost:3001/login", action.data)
    .then(response => {   
        console.log("Status Code : ", response);
        if (response.status === 200 && response.data!="error") {
          console.log("welcome customer-");
          console.log(cookie.load('cookie'));
          // this.setState({
          //   authFlag: true
          // });
        } else if (response.status === 201 && response.data!="error") {
          console.log("welcome restaurant-");
          console.log(cookie.load('cookie'));
          // this.setState({
          //   authFlag: true
          // });
        }
        else if(response.data=="error")
        {
            alert("Invalid credentials");
            // this.setState({
            // authFlag: false
        // });
        }
        // this.forceUpdate();
    })
    .catch (response => {
        alert("Invalid");
        // this.setState({
        //   authFlag: false
        // });
      }
    )
    return Object.assign({}, state, {
      data: state.data.concat(action.data)
    });
    }

    else if(action.type === SIGNUP) {
      console.log("processing in reducer-signup");
      console.log(action.data);
      // return Object.assign({}, state, {
      //   data: state.data.concat(action.data)
      // });axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/signup", action.data)
    .then(response => {   
        console.log("Status Code : ", response);
        if (response.status === 200 && response.data!="exists" && response.data!="error") {
          console.log("new customer created-");
          console.log(cookie.load('cookie'));
          // this.setState({
          //   authFlag: true
          // });
        } else if (response.status === 201 && response.data!="exists" && response.data!="error") {
          console.log("new restaurant created-");
          console.log(cookie.load('cookie'));
          // this.setState({
          //   authFlag: true
          // });
        }
        else if(response.data=="exists")
        {
            alert("There's already an account associated with this email-id :(");
        //     this.setState({
        //     authFlag: false
        // });
        }
        else
        {
            alert("Invalid");
        }
        // this.forceUpdate();
    })
    .catch (response => {
        alert("Invalid");
        // this.setState({
        //   authFlag: false
        // });
      }
    )
    return Object.assign({}, state, {
      data: state.data.concat(action.data)
    });
    }
    else if(action.type===UPDATECUST){
      console.log(action.data);
      axios.defaults.withCredentials = true;
      axios.post("http://localhost:3001/updateCust", action.data)
      .then(response => {   
          console.log("Status Code : ", response);
          if (response.status === 200 && response.data!="exists" && response.data!="error") {
            console.log("updated customer-");
            console.log(cookie.load('cookie'));
            // this.setState({
            //   authFlag: true
            // });
          } else if (response.status === 201 && response.data!="exists" && response.data!="error") {
            console.log("updated restaurant-");
            console.log(cookie.load('cookie'));
            // this.setState({
            //   authFlag: true
            // });
          }
          else if(response.data=="exists")
        {
            alert("There's already an account associated with this email-id :(");
        //     this.setState({
        //     authFlag: false
        // });
        }
          else if(response.data=="error")
          {
              alert("Invalid credentials");
              // this.setState({
              // authFlag: false
          // });
          }
      })
      .catch (response => {
          alert("Invalid");
          // this.setState({
          //   authFlag: false
          // });
        }
      )
      return Object.assign({}, state, {
        data: state.data.concat(action.data)
      });
      }
      else if(action.type===UPDATEREST){
        console.log(action.data);
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post("http://localhost:3001/updateRest", action.data)
        .then(response => {   
            console.log("Status Code : ", response);
            if (response.status === 200 && response.data!="exists" && response.data!="error") {
              console.log("updated customer-");
              console.log(cookie.load('cookie'));
              // this.setState({
              //   authFlag: true
              // });
            }
            else if(response.data=="exists")
          {
              alert("There's already an account associated with this email-id :(");
          //     this.setState({
          //     authFlag: false
          // });
          }
            else if(response.data=="error")
            {
                alert("Invalid credentials");
                // this.setState({
                // authFlag: false
            // });
            }
        })
        .catch (response => {
            alert("Invalid");
            // this.setState({
            //   authFlag: false
            // });
          }
        )
        return Object.assign({}, state, {
          data: state.data.concat(action.data)
        });
        }
    return state;
  } 
export default newReducer;