async function getUsers(names) {
    let users = [];

    for (let name of names) {
        let user = fetch(`https://api.github.com/users/${name}`).then(
                res => {
                    if (res.status !== 200) return  null;
                    else return res.json();
                },
                failRes => null
            )
        ;
        users.push(user);
    }

    return await Promise.all(users);
}

document.querySelector('button').addEventListener('click',async ()=>{
    const users = await getUsers(['igorek888rane', 'Yury', '123'])
    console.log(users);
})