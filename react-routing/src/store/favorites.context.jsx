import { createContext, useState } from "react";

// store react component
const FavoriteContext = createContext({
	favorites:[],
	totalFavorites:0,
	addFavorite:(favoriteMeetup)=>{},
	removeFavorite:(meetupId)=>{},
	itemIsFavorite:(meetupId)=>{}
});

export const FavoritesContextProvider=(props)=>{

	const [userFavorites, setUserFavorites]=useState([]);

	const addFavoriteHandler=(favoriteMeetup)=>{

		setUserFavorites((prevUserFavorites)=>{
			return prevUserFavorites.concat(favoriteMeetup);
		});

	}
	const removeFavoriteHandler=(meetupId)=>{
		setUserFavorites((prevUserFavorites)=>{
			return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
		});

	}
	const itemIsFavoriteHandler=(meetupId)=>{
		return userFavorites.some(meetup=>meetup.id===meetupId);

	}

	const context = {
		favorites:userFavorites,
		totalFavorites:userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite:removeFavoriteHandler,
		itemIsFavorite:itemIsFavoriteHandler
	};
	
	return <FavoriteContext.Provider value={context}>
		{props.children}
	</FavoriteContext.Provider>

}

export default FavoriteContext;