import clientPromise from "./mongodb"

let client:any
let db:any
let restaurants:any

async function init() {
    if(db) return
    try{
        client = await clientPromise
        db = client.db()
        restaurants = await db.collection("restaurants")
    } catch(err) {throw new Error("failed to inti");}
}
;(async () =>{
    await init()
});

export async function getRestaurants(){
    try{
        if(!restaurants) await init()
        const result = await restaurants
            .find({})
            .limit(60)
            // @ts-ignore
            .map(user =>({ ...user, _id: user._id.toString()}))
            .toArray()

        return { restaurants : result }
    }catch(error) { return{error : error} }
}