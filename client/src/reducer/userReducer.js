import cloneDeep from 'lodash/cloneDeep';


let userIntianal = {
  ID:"",
  Name:"",
  Email:"",
  Phone:"",
  Password:"",
};

const user = (state = userIntianal, action) =>{
    switch (action.type) {
        case "CHANGE_USER":{
         // let copyState = cloneDeep(state);
          let user = action.payload;
          userIntianal.Email=user.Email;
          userIntianal.ID=user.ID;
          userIntianal.Name=user.Name;
          userIntianal.Phone=user.Phone;
          userIntianal.Password=user.Password;
          return userIntianal;
        }
        case "LOGOUT":{
          userIntianal.Email="";
          userIntianal.ID="";
          userIntianal.Name="";
          userIntianal.Phone="";
          userIntianal.Password="";
        }
        default:
            return state;

    }

};

export default user;