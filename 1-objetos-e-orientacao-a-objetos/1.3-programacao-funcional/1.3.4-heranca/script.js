const defaultUser = {
    name: '',
    email: '',
    level: 1,
}

const user1 = {
    ...defaultUser,
    name: 'Leonardo',
    email: 'leow@gmail.com'
}

const adm1 = {
    ...defaultUser,
    name: 'Admin Boladão',
    email: 'admboladao@gmail.com',
    level: 2,
}

console.log(adm1);