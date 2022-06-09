import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

const MeetupItem=(props)=>{
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
					<button>To Favorites</button>
				</div>
			</Card>
		</li>
	)
};

export default MeetupItem;