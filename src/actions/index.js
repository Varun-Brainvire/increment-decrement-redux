import axios from "axios"
import { GET_USERS } from "./actions"

export const incNumber = () => {
    console.log('increment')
    return {
        type:"INCREMENT"
    }
}

export const decNumber = () => {
    return {
        type:"DECREMENT"
    }
}

export const userActions = () => {
    console.log("Varun")
    // dispatch({type:"USER_DATA"})
    // try{
    //     const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     console.log(data);
    // }
    // catch(error) {
    //     dispatch({type:"DATA_FAILED",payload:error.data})
    // }

    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json();

    return () => {
        return fetch("https://jsonplaceholder.typicode.com/users",{
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
          }
        )
          .then((resp) => {
            let json = resp.json();
            console.log(json)
            return json
        //    if (resp.status >= 200 && resp.status < 300) {
        //     //   alert("inside if")
        //     } else {
        //       return json.then(Promise.reject.bind(Promise));
        //     }
          })
          .then((response) => {
            console.log(response)
          })
          .then(
            json => {
              if (json.result && (json.result.status === 'error')) {
                // dispatch(errorOccurred(json.result));
                // dispatch(logOut());
              }
              else{
                // dispatch(verified(json.result));
              }
            }
          )
          .catch((error) => {
            // dispatch(warningOccurred(error, url));
          })
      }

    // return dispatch => {
    //     dispatch({
    //       type: 'GET_USERS',
    //       user: data
    //     })
    // }

    // return dispatch  => {
    //     console.log("Get users")

    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //         const person = res.data

    //         dispatch({
    //             type:GET_USERS,
    //             user:person
    //         })
    //     })
    // }

}
