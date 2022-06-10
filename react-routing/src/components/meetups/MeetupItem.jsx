import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoriteContext from '../../store/favorites.context';


const MeetupItem=(props)=>{

	const FavoriteCtx = useContext(FavoriteContext);
	const itemIsFavorite = FavoriteCtx.itemIsFavorite(props.item.id);

	const toggleFavoriteStatusHandler=()=>{
		itemIsFavorite ? FavoriteCtx.removeFavorite(props.item.id) : FavoriteCtx.addFavorite(props.item);
	}
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.item.image} alt={props.item.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.item.title}</h3>
					<address>{props.item.address}</address>
					<p>{props.item.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
				</div>
			</Card>
		</li>
	)
};

export default MeetupItem;