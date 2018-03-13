import * as angular from "angular";
import * as angularMock from "angular-mocks";
import {returnHello} from "../src/ts/HelloWorld";
import {AppModule} from "../src/ts/App";

//forcing module inclusion when typescript compile
if (angularMock === undefined) {
    console.error("angularMock is not defined");
}
if (AppModule === undefined) {
    console.error("AppModule is not defined");
}

describe("HelloWorld returnHello", () => {
        it("returns hello", () => {
            let test = "Hello";
            expect(
                returnHello()
            ).toEqual(test)
        });
    }
);

describe("An Angular Application", () => {
    let talkService;
    let echoService;

    beforeEach(() => {
            angular.mock.module('app');
        }
    );

    beforeEach(inject((_talkService_, _echoService_) => {
        talkService = _talkService_;
        echoService = _echoService_;
    }));

    it("returns hello", () => {
        var test = "Hello";
        expect(
            talkService.talk(test)
        ).toEqual(test)
    });
});

describe("An Angular Application with mockedService using a mock method", () => {
    let mockedTalkService;
    let echoService;

    beforeEach(() => {
        angular.mock.module('app');

        inject((_talkService_, _echoService_) => {
            mockedTalkService = _talkService_;
            echoService = _echoService_;
        });
    });

    it("returns Hello by mocking method", () => {
        mockedTalkService.talk = function (msg: string) {
            return "Hello"
        };

        const test = "Hello";
        expect(
            mockedTalkService.talk(test)
        ).toEqual(test)
    });
});

describe("An Angular Application with mockedService using a mock service", () => {
    let talkService;
    let mockEchoService = {
        echo: function (msg: string) {
            return "" + msg;
        }
    };

    beforeEach(() => {
        angular.mock.module('app');


        angular.mock.module(($provide) => {
            $provide.value('echoService', mockEchoService);
        });

        inject((_talkService_) => {
            talkService = _talkService_;
        })
    });

    it("returns Hello by mocking method", () => {
        const test = "Hello";
        expect(
            talkService.talk(test)
        ).toEqual(test)
    });
});