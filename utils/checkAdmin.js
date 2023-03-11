
function checkAdmin(email){
    let pattern = /((?<=\@)admin)(?=\.com)/;
    return email.match(pattern)
}

module.exports = checkAdmin;