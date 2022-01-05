import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const caretDown = <FontAwesomeIcon icon={faCaretDown} />;
const caretUp = <FontAwesomeIcon icon={faCaretUp} />;

const Session = (props) => {
	return (
		<div id='sessionBox'>
			<span id='session-label'>Session Length</span>
			<div id='session-length'>{props.length}</div>
			<div className='iconsRow'>
				<i id='session-decrement' onClick={props.handle}>{caretDown}</i>
				<i id='session-increment' onClick={props.handle}>{caretUp}</i>
			</div>
		</div>
	);
	
}

export default Session;