export const createUserService=(name, email)=>{
    console.log("Processing data in service");
    const newUser={
        id:Date.now().toString(),
        email:email,
        name:name
    };
    users.push(newUser);

    return(newUser);
}

