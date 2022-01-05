import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const pausePlay = <FontAwesomeIcon icon={faStepForward} />;
const reset = <FontAwesomeIcon icon={faUndoAlt} />;

const Timer = (props) => {
	return (
		<div id='timer-box'>
			<span id='timer-label'>{props.disp}</span>
			<div id='time-left'>{props.time}</div>
			<div className='iconsRow'>
				<i id='start_stop' onClick={props.pausePlay}>{pausePlay}</i>
				<i id='reset' onClick={props.reset}>{reset}</i>
			</div>
		</div>
	);
}

export default Timer;