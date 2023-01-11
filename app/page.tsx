import { getRestaurants } from "../lib/getRestaurants";
import { getRestaurantPictures } from "../lib/getResPictures";
import { stringify } from "querystring";


async function fetchRestaurants(){
	const { restaurants } = await getRestaurants();
	if(!restaurants) throw new Error("Failed to fetch restaurants")
	return restaurants;
}
async function fetchPictures(){
	const { pictures } = await getRestaurantPictures();
	if(!pictures) throw new Error("Failed to fetch images")
	return pictures;
}
const getPics = async () => {
	const URL = "https://api.unsplash.com/photos/random?query=restaurant&count="+process.env.NUMBER_OF_PICS+"&client_id=" + process.env.UNSPLASH_ID
	const response = await fetch(URL, {method: "GET"});
	const data = await response.json();
	return data;
}

async function getDownloadUrl(URL:string):Promise<string>{
	const response =  await fetch(URL, {method: "GET"});
	const {url} = await response.json();
	console.log("From getDownloadUrl "+ url);
	return url;
}

async function heelo(restaurants:any, test:any) {
	const downloadUrls:Array<string> = []
	restaurants.map((restaurant:any, index:any) => (
		getDownloadUrl(test[index].links.download_location + "&client_id=" + process.env.UNSPLASH_ID).then(str => {
			downloadUrls.push(str);
			console.log("map ran " + str + " to " + index);
		})
	))
	return downloadUrls;
}

async function download(url:string){
	getDownloadUrl(url).then(str => {
		fetch(str).then(res => res.blob()).then(file => {
			var tempUrl = URL.createObjectURL(file)
			var aTag = document.createElement("a")
			
			console.log(file);
		})
	})
}

export default async function Home() {
	const restaurants = await fetchRestaurants();
	const test = await getPics();

	return (
		<div className="p-14 px-6 md:px-10 lg:px-15 xl:px-18 2xl:px-20">
			<div className="grid auto-cols-auto gap-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{/* @ts-ignore */}
				{restaurants.map((restaurant, index) => (
					<div key={restaurant._id} className="block place-items-center mx-auto overflow">
						<div className="relative group">
							<img className="aspect-square rounded-xl object-cover pointer-events-none" src={test[index].urls.regular} alt="Retaurant pictures" loading="lazy" />

							<a className="absolute bottom-2 left-2 text-soft-white-500 hover:underline invisible group-hover:visible cursor-pointer text-soft-white" href={'https://unsplash.com/@'+ test[index].user.username + "?utm_source="+process.env.APP_NAME+"&utm_medium=referral"} target="_blank"> @ {test[index].user.instagram_username}</a>

							<div className="absolute top-1 right-1 rounded-full bg-soft-white-500 drop-shadow-md grid place-items-center invisible group-hover:visible">
								{/* @ts-ignore */}
								<a className="w-8 aspect-square grid place-items-center" onClick={download(test[index].links.download_location + "&client_id=" + process.env.UNSPLASH_ID)}>
									<img className="w-6 aspect-square" src="https://cdn-icons-png.flaticon.com/512/9344/9344195.png" alt="download" />
								</a>
							</div>

							<div className="absolute top-1 right-10 rounded-full bg-soft-white-500 drop-shadow-md grid place-items-center invisible group-hover:visible">
								<a className="w-8 aspect-square grid place-items-center" href={test[index].urls.regular} target="_blank">
									<img className="w-4 aspect-square" src="https://cdn-icons-png.flaticon.com/512/158/158749.png" alt="redirect" />
								</a>
							</div>
							

						</div>

						<div className="flex place-items-center w-full">
							<h1 className="font-bold text-lg text-softblack grow">{restaurant.name}</h1>
							<div className="flex space-x-2 p-2 place-items-center">
								<img className="w-4 h-4 aspect-square" src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png" alt="star" />
								<h1>{restaurant.grades[0].grade}</h1>
							</div>
						</div>
						<h1 className="mt-2 w-full">{restaurant.cuisine}</h1>
						<h1 className="mt-2 w-full text-lg text-softblack">{restaurant.address.street} {restaurant.address.zipcode}</h1>
					</div>
				))}

			</div>

			{/* <ul>
				{restaurants.map(restaurant => (
					<li key={restaurant._id}>{restaurant.name}</li>
				))}
			</ul> */}
		</div>
	)
}