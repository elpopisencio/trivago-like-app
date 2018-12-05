import React from 'react';

export default function Confirmation({ match }){
	const latest_booking = JSON.parse(localStorage.getItem("latest_booking"));
	const { id } = match.params;
	console.log(latest_booking);
	if(latest_booking && latest_booking[id]){
		return (
			<div>{id}</div>
		)
	}
	return <div>empty</div>
}