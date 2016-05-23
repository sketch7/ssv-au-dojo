
// import "bootstrap";
import {Aurelia} from "aurelia-framework";
import {Bootstrapper} from "./app/app.bootstrap";

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature("app/components", {})
		.plugin("aurelia-animator-css");
		;

	// Uncomment the line below to enable animation.
	// aurelia.use.plugin("aurelia-animator-css");
	aurelia.start().then(() => {
		const bootstrapper: Bootstrapper = aurelia.container.get(Bootstrapper);
		bootstrapper.bootstrap();
		aurelia.setRoot(`app/areas/layout/layout`);
	});
}