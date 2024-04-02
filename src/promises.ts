function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}


// Keep promises you can make and make promises you can Keep

{
    function getResponseFromAPI(): Promise<any>{
        return new Promise((resolve,reject)=>{
            let errCondition: boolean = false

            if (errCondition){
                reject({"error": "could not complete"})
            } else {
                resolve({"status": "ok"})
            }
        })
    }

    let response = getResponseFromAPI();
    response.catch(error => {
        console.error("Promise rejected", error)
    })
    console.log(response instanceof Promise);
    console.log("Keep promises, getting hands dirty-task 1\n\n")
}

// Dont make a promise.. if you cant keep it
{
    function getFullResponseFromAPI(success: boolean): Promise<{"status": number; "body": string}>{
        return new Promise((resolve, reject)=>{
            if(success){
                resolve({
                    status: 200,
                    body: "Success"
                })
            } else {
                reject(
                    new Error("The Fake API is not working currently")
                )
            }
        })
    }


    getFullResponseFromAPI(true).then(
        (resp)=>{
            console.log(resp)
        }
    ).catch((error)=>{console.log("err: ", error)})

    console.log("returning resolved resp\n\n")

}

{
    // catch me if you can
    async function handleResponseFromAPI(promise: Promise<any>): Promise<{"status": number; "body": string}>{
        return promise
        .then(response =>{
                console.log("Got a response the API");
                return {status: 200, body: "success"}
            })
        .catch(error =>{
                console.error("Error: ", error)
                return {status: 0, body: ""}
            })
    }


    (async ()=>{
        const promise =Promise.resolve();
        handleResponseFromAPI(promise);
        console.log("Promise.resolve arg\n\n")
    })()

}


{
    async function handleProfileSignUp(): Promise<void>{
        try{
            const photoResult = await uploadPhoto()
            const userResult = await createUser()

            console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`)
        }catch(error) {
            console.error("Signup system offline")
        }
        
    }

    (async()=>{
        await handleProfileSignUp()
    })()
    console.log("Testing\n\n")
}

{
    function signUpUser(FirstName: string, LastName: string): Promise<{"FirstName": string; "LastName": string}>{
        return Promise.resolve({
            FirstName: FirstName,
            LastName: LastName,
        })
    }

    (async()=>{
    console.log(signUpUser("Bob", "Dylan"));
    console.log("Signup promise")
    })()
}



