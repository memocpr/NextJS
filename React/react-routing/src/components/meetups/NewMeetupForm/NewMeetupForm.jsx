import React from 'react';
import Card from '../../ui/Card';
import styles from './NewMeetupForm.module.css';
import { useRef } from 'react';


const NewMeetupForm = (props) => {

		const titleInputRef = useRef();
		const imageInputRef = useRef();
		const addressInputRef = useRef();
		const descriptionInputRef = useRef();

	const submitHandler=(event)=>{

		event.preventDefault(); // prevent unwanted execution

		const meetupData = {
			title:titleInputRef.current.value,
			image:imageInputRef.current.value,
			address:addressInputRef.current.value,
			description:descriptionInputRef.current.value
		};
	
		props.onAddMeetup(meetupData);

	};

	return (
		<Card>
		<form className={styles.form} onSubmit={submitHandler}>

			<div className={styles.control}>

			<label htmlFor="title">Meetup Title</label>
			<input type="text" required id='title' ref={titleInputRef} />

			</div>

			<div className={styles.control}>

				<label htmlFor="image">Meetup Image</label>
				<input type="url" required id='image' ref={imageInputRef} />

			</div>

			<div className={styles.control}>

				<label htmlFor="address">Address</label>
				<input type="text" required id='address' ref={addressInputRef} />

			</div>

			<div className={styles.control}>

				<label htmlFor="description">Description</label>
				<textarea id="description" rows="10" required ref={descriptionInputRef}></textarea>

			</div>

			<div className={styles.actions}>

				<button>Add Meetup</button>

			</div>

		</form>
	</Card>
	)

};



export default NewMeetupForm;
