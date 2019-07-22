import React from 'react';
import Calendar from 'react-calendar';
import '../assets/css/sidebar.css';

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);

		var d = new Date();
		d.setDate(d.getDate() - 2);

		this.state = {
			inpt: "none",
			total: 0,
			minDate: d,
			now: new Date(),
			date_chosen: ""
		}
	}

	inptAlert = () => {
		var inpt_val = document.getElementById("inpt").value;
	}

	handleChange = () => {
		this.state.inpt = this.refs.inval.value;
		this.setState(this.state);
	}

	add = () => {
		var num1 = (this.refs.num1.value) ? parseInt(this.refs.num1.value) : 0;
		var num2 = (this.refs.num2.value) ? parseInt(this.refs.num2.value) : 0;
		var total = num1 + num2;
		this.state.total = total;
		this.setState(this.state);
	}

	handleDateChange = date => {
		this.state.date_chosen = date.toLocaleString();
		this.setState(this.state);
	}

	render() {
		return (
			<div class="sidebar">
				<div>{this.props.username}</div>
				<div>{this.props.ddd.password}</div>
				<div>
					<input onKeyUp={this.handleChange} id="inpt" type="text" ref="inval" />
				</div>
				<div>
					<span>{this.state.inpt}</span>
				</div>
				<div>
					<button onClick={this.inptAlert} >Alert</button>
				</div>
				<div>
					<input type="number" ref="num1" />
					<input type="number" ref="num2" />
				</div>
				<div>{this.state.total}</div>
				<button onClick={this.add} >Add</button>
				<Calendar minDate={this.state.minDate} value={this.state.now} onChange={this.handleDateChange}  />
				<div>{this.state.date_chosen}</div>
			</div>
		);
	}
}