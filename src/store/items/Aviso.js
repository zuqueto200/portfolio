 
const INITIAL_STATE = ['','']
  
  export default function reducer(state = INITIAL_STATE, action) {

    if(action.type === 'AVISO'){
      return action.item
    }
    return state;
  } 
  

export const avisoReducer = item =>{
  return {
    type: 'AVISO',
    item
  }
}