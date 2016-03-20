import {FrameworkConfiguration} from "aurelia-framework";

export function configure(aurelia: FrameworkConfiguration, args: any) {
	aurelia.globalResources("nav/nav");

	aurelia.globalResources("value-converters/uppercase");
}