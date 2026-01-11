const useRegister = async (userDetails)=> {
return new Promise((resolve) => {
    resolve({
        name:userDetails.firstName,
        message:"Register successfully"
    });
});
}