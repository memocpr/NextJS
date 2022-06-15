
import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

const AllMeetupsPage=()=>{

	// helpers
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	const API_URL='https://react-learning-85b85-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

	useEffect(()=>{

		setIsLoading(true);

		fetch(API_URL).then(res=>{
			return res.json();
		}).then(data=>{

			// transfom data format to array
			const meetups=[];

			for(const key in data){
				const meetup={
					id:key,
				...data[key]
				};
				meetups.push(meetup);
			};

			setIsLoading(false);
			setLoadedMeetups(meetups);

		});

	}, []);

	// show reults after fecthing
	return isLoading ? (<section>Loading...</section>) : 

   (
			<section>
				<h1>All Meetups</h1>

				<MeetupList meetups={loadedMeetups} />

			</section>
		)

}
export default AllMeetupsPage;