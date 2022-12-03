
// const INITIAL_STATE = [
//     {
//       nome: "Aleatorio 1",
//       img: "https://picsum.photos/id/10/100/100",
//     },
//     {
//       nome: "Aleatorio 2",
//       img: "https://picsum.photos/id/20/100/100",
//     },

//   ];

const INITIAL_STATE = false
  
  export default function reducer(state = INITIAL_STATE, action) {

    if(action.type === 'LOAD'){
      return action.item
    }
    return state;
  } 
  

export const loadReducer = item =>{
  return {
    type: 'LOAD',
    item
  }
}