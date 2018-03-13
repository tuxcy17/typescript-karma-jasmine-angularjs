class EchoService {
    static $inject = [];

    constructor () {

    }

    public echo(msg: string): string {
        return msg;
    }
}

function EchoServiceFactory () {
    return EchoService;
}

export {EchoServiceFactory, EchoService}