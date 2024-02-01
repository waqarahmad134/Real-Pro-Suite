const initialState = 10;
const changeNumber =(state="",action)=>{
  switch(action.type){
    case "INCREMENT": return action.payload;
    default:return state
  }

}

export default changeNumber;