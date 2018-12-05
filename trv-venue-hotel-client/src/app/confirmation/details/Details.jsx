import React from 'react';
import Link from './Link';

export default function Details({ match }) {
	return (
	  <div>
		 <h3>ID: {match.params.id}</h3>
	  </div>
	);
 }