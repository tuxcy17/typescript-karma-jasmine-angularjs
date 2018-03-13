import {EchoService} from "./EchoService";
class TalkService {
    static $inject = ['echoService'];

    private echoService: EchoService;

    constructor (echoService: EchoService) {
        this.echoService = echoService
    }

    public talk(msg: string): string {
        return this.echoService.echo(msg);
    }
}

function TalkServiceFactory () {
    return TalkService;
}

export {TalkServiceFactory, TalkService}