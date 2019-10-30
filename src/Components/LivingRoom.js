import React from 'react';
import './LivingRoom.css'
import { Link } from 'react-router-dom';

const LivingRoom = () => (
	<div className="background-LivingRoom">
		<div className="freddy-text-button">
			<img className="freddy-LivingRoom" src={"https://zupimages.net/up/19/44/37ns.png"}/>
			<div className="text-button">
				<p>Hey mon copain ! Alors qu'est ce que l'on va regarder comme film ? Vas-y choisis en un</p>
				<button><Link to="/ComponentTestRouter">Suivant</Link></button>
			</div>
		</div>
	</div>
)

export default LivingRoom;