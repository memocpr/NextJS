
import NewMeetupForm from "../components/meetups/NewMeetupForm/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

const NewMeetupPage=()=>{

const navigate = useNavigate();

	// send http request
	const addMeetupHandler=(meetupData)=>{

		const API_URL='https://react-learning-85b85-default-rtdb.europe-west1.firebasedatabase.app';

		fetch(API_URL+'/meetups.json',
		{
			method:'POST',
			body:JSON.stringify(meetupData),
			headers:{
				'Content-Type':'application/json'
			}
		}).then(()=>{
			navigate('/');
		});

	};

    return (
			<section>
				<h1>New Meetup</h1>
				<NewMeetupForm onAddMeetup={addMeetupHandler}/>

			</section>
		)

}
export default NewMeetupPage;