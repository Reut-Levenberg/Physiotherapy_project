import cloneDeep from 'lodash/cloneDeep';


let userIntianal = {
    Name:"",
    ID:"",
    email:"",
    phone:"",
    password: ""
};

const user = (state = userIntianal, action) =>{
    switch (action.type) {
        case "CHANGE_USER":{
          let copyState = cloneDeep(state);
          let userId = action.payload;
        //copyState =getUser()  גישה לשרת עם התז המתאים
          return copyState;
        }
        default:
            return state;

    }

};

export default user;