var Container = require('react-container');
var React = require('react');
var Timers = require('react-timers');
var Mixins = require('touchstonejs').Mixins;

module.exports = React.createClass({
	mixins: [Mixins.Transitions, Timers()],

	componentDidMount: function () {
		var self = this;

		this.setTimeout(function () {
			self.transitionTo('tabs:transitions', { transition: 'fade' });
		}, 1000);
	},

	render: function () {
		return (
			<Container direction="column" align="center" justify="center" className="no-results">
				<div className="no-results__icon ion-ios-photos" />
				<div className="no-results__text">Hold on a sec...</div>
			</Container>
		);
	}
});
