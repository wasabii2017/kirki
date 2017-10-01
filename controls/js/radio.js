/* global kirki */
wp.customize.controlConstructor['kirki-radio'] = wp.customize.kirkiDynamicControl.extend({
	ready: function() {
		var control = this;

		wp.customize.kirkiDynamicControl.prototype.ready.call( control );

		control.deferred.embedded.done( function() {
			control.container.html( kirki.control.radio.template( control.params ) );
			kirki.control.radio.init( control.params );
		});
	}
});