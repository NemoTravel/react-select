import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

var DefaultValuesSelect = createClass({
	displayName: 'DefaultValuesSelect',
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
	fillOptions() {
		this.setState({
			options: [
				{value: 'orange', label: 'Orange'}
			]
		});
		return false;
	},
	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					onChange={this.onChange}
					defaultOptions={this.state.defaultOptions}
					defaultOptionsHint="This is default options because `options` parameter is empty"
					options={this.state.options}
					simpleValue
					value={this.state.value}
				/>
				<div className="hint">This example uses default options when `options` is empty</div>
				<a onClick={this.fillOptions} href="#">Fill options</a>
			</div>
		);
	}
});

module.exports = DefaultValuesSelect;
