
export default async function handler(req, res) {

    if(req.method === "GET"){
        try{
            const URL = "https://api.unsplash.com/photos/random?query=restaurant&count="+process.env.NUMBER_OF_PICS+"&client_id=" + process.env.UNSPLASH_ID
            const response = await fetch(URL, {method: "GET"});
            const data = await response.json();

            return res.status(200).json(data)
            // @ts-ignore
        }catch(err){return res.status(500).json({err : err.message})}
    }

    res.setHeader('Allow', ['GET'])
    res.status(425).end(`method ${req.method} is not supported`)

}   