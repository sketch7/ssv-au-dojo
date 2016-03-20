export class AppConst {

	basePath = "/dist/app";

	name = "Heroes";
	version = "1.0.0-alpha";

	routeStates = new RouteStateConfig();
}


export class RouteStateConfig {
	layout = "layout";

	error = "error";
	home = `${this.layout}.home`;
	basicForm = `${this.layout}.basic-form`;

	heroesLayout = `${this.layout}.heroes-layout`;
	heroes = `${this.layout}.heroes`;
	hero = `${this.layout}.hero`;
}

export default new AppConst();