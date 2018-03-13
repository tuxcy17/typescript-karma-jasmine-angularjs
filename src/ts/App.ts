import * as angular from "angular";

import {EchoService} from "./EchoService";
import {TalkService} from "./TalkService";

const AppModule = angular.module('app', [])
    .service('echoService', EchoService)
    .service('talkService', TalkService);

export {AppModule}