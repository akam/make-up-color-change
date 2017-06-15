import axios from 'axios'

export const GET_RANDOM_MAKEUP = 'GET_RANDOM_MOVIE'
export const GET_RANDOM_COLOR = 'GET_RANDOM_COLOR'


//we need to define an action here with type: payload: 
export function getMakeup(makeupData) {
  debugger;
  return { type: GET_RANDOM_MAKEUP, makeupData }
}

export function getRandomMakeup() {
  return function (dispatch) {
    debugger;
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((response) => {
        debugger;
        //get random index
        const index = Math.floor(Math.random() * response.data.length)
        //getMakeup uses the function defined above to make a object.
        dispatch(getMakeup(response.data[index]))
      })
      .catch((error) => console.error('axios error', error))
  }
}

export function getRandomColor(data){
  debugger
  return function(dispatch){
    dispatch(getColor(data));
  }
}

export function getColor(data){
  debugger
  if(JSON.stringify(data.product_colors) !== JSON.stringify([])){
    debugger
    let randomIndex = Math.floor(Math.random() * data.product_colors.length)
    return {type: GET_RANDOM_COLOR, payload: {color: data.product_colors[randomIndex].hex_value}}
  } else {
    debugger
    return {type: GET_RANDOM_COLOR, payload: {color: 'lightblue'}}
  }
}
