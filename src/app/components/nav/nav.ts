import { autoinject, customElement, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import { NotificationService } from "app/modules/notification/notification";
import { UserInfo } from "app/modules/user/user";
import consts from "app/app.const";

const id = "navBarController";

@autoinject
@customElement("ssv-navbar")
export class NavBarController {

	@bindable router: Router;

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

	private logger: ILog;
	private intervalToken: number;

	constructor(
		loggerFactory: LoggerFactory,
		private notificationService: NotificationService,
		private userInfo: UserInfo
	) {
		this.logger = loggerFactory.get(id);
		this.logger.debug("ctor", "init");
		this.unreadNotificationsCount = this.notificationService.getUnreadCount();
	}

	attached(): void {
		this.intervalToken = setInterval(() => {
			this.logger.debug("attached", "interval trigger");
			this.unreadNotificationsCount++;
		}, 5000);
	}

	detached(): void {
		if (this.intervalToken) {
			clearInterval(this.intervalToken);
		}
	}
}