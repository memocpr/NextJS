import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorites.context";

const FavoritesPage=()=>{

	const favoriteCtx = useContext(FavoriteContext);
	let content;

	content = favoriteCtx.totalFavorites===0 ? 
	<p>No Favorites yet. Start adding?</p> :
	<MeetupList meetups={favoriteCtx.favorites}/>;

    return <section>
			<h1>Favorites</h1>
			{content}
		</section>

}
export default FavoritesPage;