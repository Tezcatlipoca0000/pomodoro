import React, {Component} from 'react';
import Break from './Break.js';
import Session from './Session.js';
import Timer from './Timer.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			break: 5,
			session: 25,
			current: 'Session',
			timer: '25:00',
			pause: false,
			interval: 0
		}

		this.handleLength = this.handleLength.bind(this);
		this.handleTime = this.handleTime.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleLength(e) {
		if (this.state.pause) {
			return
		}
		let id = e.currentTarget.id;
		let breakLength = parseInt(this.state.break);
		let sessionLength = parseInt(this.state.session);
		if (id === 'break-increment') {
			if (breakLength === 60) {
				return
			} else {
				breakLength++;
				if (breakLength > 9) {
					this.setState({
						break: breakLength
					});
					if (this.state.current === 'Break') {
						this.setState({
							timer: breakLength + ':00'
						});
					}
				} 
				if (breakLength < 10) {
					this.setState({
						break: breakLength
					});
					if (this.state.current === 'Break') {
						this.setState({
							timer: '0' + breakLength + ':00'
						});
					}
				}
			}
		}
		if (id === 'break-decrement') {
			if (breakLength === 1) {
				return
			} else {
				breakLength--;
				if (breakLength > 9) {
					this.setState({
						break: breakLength
					});
					if (this.state.current === 'Break') {
						this.setState({
							timer: breakLength + ':00'
						});
					}
				}
				if (breakLength < 10) {
					this.setState({
						break: breakLength
					});
					if (this.state.current === 'Break') {
						this.setState({
							timer: '0' + breakLength + ':00'
						});
					}
				}
			}
		}
		if (id === 'session-increment') {
			if (sessionLength === 60) {
				return
			} else {
				sessionLength++;
				if (sessionLength > 9) {
					this.setState({
						session: sessionLength
					});
					if (this.state.current === 'Session') {
						this.setState({
							timer: sessionLength + ':00'
						});
					}
				}
				if (sessionLength < 10) {
					this.setState({
						session: sessionLength
					});
					if (this.state.current === 'Session') {
						this.setState({
							timer: '0' + sessionLength + ':00'
						});
					}
				}
			}
		}
		if (id === 'session-decrement') {
			if (sessionLength === 1) {
				return
			} else {
				sessionLength--;
				if (sessionLength > 9) {
					this.setState({
						session: sessionLength
					});
					if (this.state.current === 'Session') {
						this.setState({
							timer: sessionLength + ':00'
						});
					}
				}
				if (sessionLength < 10) {
					this.setState({
						session: sessionLength
					});
					if (this.state.current === 'Session') {
						this.setState({
							timer: '0' + sessionLength + ':00'
						});
					}
				}
			}
		}
	}

	handleTime() {
		if (this.state.interval) {
			clearInterval(this.state.interval);
			this.setState({
				interval: 0
			});
		}
		this.setState(prevState => ({
			pause: !prevState.pause
		}));
		if (!this.state.pause) {
			let newInterval = setInterval(() => {
					let min = Number(this.state.timer.slice(0,2));
					let sec = Number(this.state.timer.slice(3));
					if (min > 0 && sec === 0) {
						min--;
						sec = 59;
						if (min > 9) {
							this.setState({
								timer: min + ':' + sec
							});
						} else if (min < 10) {
							this.setState({
								timer: '0' + min + ':' + sec
							});
						}
					} else if (sec > 0) {
						sec--;
						if (min > 9 && sec > 9) {
							this.setState({
								timer: min + ':' + sec
							});
						} else if (min > 9 && sec < 10) {
							this.setState({
								timer: min + ':0' + sec
							});
						} else if (min < 10 && sec > 9) {
							this.setState({
								timer: '0' + min + ':' + sec
							});
						} else if (min < 10 && sec < 10) {
							this.setState({
								timer: '0' + min + ':0' + sec
							});
						}
					} else if (min === 0 && sec === 0) {
						let beep = document.getElementById('beep');
						beep.currentTime = 0;
						beep.play(); 
						this.setState({
							timer: '00:00'
						});
						let breakLength = this.state.break;
						let sessionLength = this.state.break;
						if (this.state.current === 'Session') {
							this.setState({
								current: 'Break',
							});
							if (breakLength > 9) {
								this.setState({
									timer: breakLength + ':00'
								});
							} else {
								this.setState({
									timer: '0' + breakLength + ':00'
								});
							}
						} else {
							this.setState({
								current: 'Session',
							});
							if (sessionLength > 9) {
								this.setState({
									timer: sessionLength + ':00'
								});
							} else {
								this.setState({
									timer: '0' + sessionLength + ':00'
								});
							}
						}
					}

			}, 1000);
			this.setState({
				interval: newInterval
			});
		} else {
			clearInterval(this.state.interval);
		}
	}

	handleReset() {
		clearInterval(this.state.interval);
		this.setState({
			break: 5,
			session: 25,
			timer:'25:00',
			current: 'Session',
			pause: false
		});
		let beep = document.getElementById('beep');
		beep.pause();
		beep.currentTime = 0;
	}				

	render() {
		return (
			<div id='appContainer'>
				<div id='lengthContainer'>
					<Break length={this.state.break} handle={this.handleLength}/>
					<Session length={this.state.session} handle={this.handleLength}/>
				</div>
				<Timer disp={this.state.current} time={this.state.timer} pausePlay={this.handleTime} reset={this.handleReset}/>
				<audio id='beep' src='./Beep-beep.mp3'></audio>
			</div>
		);
	}
	
}

export default App;