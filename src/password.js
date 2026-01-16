function validPassword(password){
    if(password.length < 8){
        return false;
    }

    if(!(/\d/.test(password))){
        return false;
    }

    if(!(/[!@#$%^&*(),.?:{}|<>]/.test(password))){
        return false;
    }

    if((/ipl/i.test(password))){
        return false;
    }
    return true
}

module.exports = { validPassword };