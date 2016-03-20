
// import "bootstrap";
import {Aurelia} from "aurelia-framework";

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging();

	//Uncomment the line below to enable animation.
	//aurelia.use.plugin('aurelia-animator-css');
	aurelia.start().then(() => aurelia.setRoot(`app/areas/layout/layout`));
}