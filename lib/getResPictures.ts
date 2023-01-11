import clientPromise from "./mongodb"

let client:any
let db:any
let pictures:any

async function init() {
    if(db) return
    try{
        client = await clientPromise
        db = client.db()
        pictures = await db.collection("restaurant_pictures")
    } catch(err) {throw new Error("failed to inti");}
}
;(async () =>{
    await init()
});

export async function getRestaurantPictures(){
    try{
        if(!pictures) await init()
        const result = await pictures
            .find({})
            .limit(1)
            // @ts-ignore
            .map(user =>({ ...user, _id: user._id.toString()}))
            .toArray()

        return { pictures : result }
    }catch(error) { return{error : error} }
}