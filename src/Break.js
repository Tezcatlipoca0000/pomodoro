import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const caretDown = <FontAwesomeIcon icon={faCaretDown} />;
const caretUp = <FontAwesomeIcon icon={faCaretUp} />;

const Break = (props) => {
	return (
		<div id='breakBox'>
			<span id='break-label'>Break Length</span>
			<div id='break-length'>{props.length}</div>
			<div className='iconsRow'>
				<i id='break-decrement' onClick={props.handle}>{caretDown}</i>
				<i id='break-increment' onClick={props.handle}>{caretUp}</i>
			</div>
		</div>
	);
	
}

export default Break; 