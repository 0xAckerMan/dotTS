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

}

// catch me if you can
