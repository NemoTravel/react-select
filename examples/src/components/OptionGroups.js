import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

var OptionGroupsSelect = createClass({
	displayName: 'OptionGroupsSelect',
	propTypes: {
		label: PropTypes.string
	},
	getInitialState () {
		return {
			defaultOptions: [
				{ value: 'hello', label: 'Yes' },
				{ value: 'hello2', label: 'No' },
				{ value: 'vv', label: 'Maybe' }
			],
			options: [],
			value: null
		};
	},
	onChange(value) {
		this.setState({ value });
		console.log('Default Select value changed to', value);
	},
	render () {
		const optionsGroup = [
			{ label: 'Fruits', options: [
				{ label: 'Orange', value: 'orange' },
				{ label: 'Apple', value: 'apple' },
			], className: 'fruitsClass' },
			{ label: 'Vegetables', options: [
				{ label: 'Tomato', value: 'tomato' },
				{ label: 'Potato', value: 'potato' },
			] }];

		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					onChange={this.onChange}
					optionsGroup={optionsGroup}
					simpleValue
					value={this.state.value}
				/>
			</div>
		);
	}
});

module.exports = OptionGroupsSelect;
