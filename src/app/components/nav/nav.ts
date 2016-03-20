import {autoinject, customElement, bindable} from "aurelia-framework";
import {Router} from "aurelia-router";
import {ILog, LogService} from "core/logger/logger";

import {NotificationService} from "app/modules/notification/notification";
import {UserInfo} from "app/modules/user/user";
import consts from "app/app.const";

const id = "navBarController";

@autoinject
@customElement("ssv-navbar")
export class NavBarController {

	@bindable
	router: Router = null;

	heroesState = consts.routeStates.heroes;
	unreadNotificationsCount = 0;

	get appTitle() {
		return consts.name;
	}

	get appVersion() {
		return consts.version;
	}

	get user() {
		return this.userInfo.alias;
	}

	private _logger: ILog;

	constructor(
		private logService: LogService,
		private notificationService: NotificationService,
		private userInfo: UserInfo
	) {
		this._logger = logService.getLogger(id);
		this._logger.info("ctor", "init");
		this.unreadNotificationsCount = this.notificationService.getUnreadCount();
	}
}