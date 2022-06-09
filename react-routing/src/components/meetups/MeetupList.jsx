
import classes from './MeetupList.module.css';

import MeetupItem from './MeetupItem';

const MeetupList=(props)=>{

	return (
		<ul className={classes.list}>

			{props.meetups.map((meetup) => (
				<MeetupItem key={meetup.id} item={meetup}/>
			))}

		</ul>
	)
}

export default MeetupList;