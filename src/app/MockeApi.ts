
export const login = async(_email:String, _password:String)=>{
    const users = await axios.get("https://jsonplaceholder.typicode.com/users")
    const validateUsername =>{
        return (true or false)
    }
    if(validate(username)){
        
    }
    const user = users.filter(({userName,password}) =>{
        return _euserName===userName &&  _password===password
    }) 
    if(user){
        return user;
    }
    else {throw new Error}
    // throw "403"
}