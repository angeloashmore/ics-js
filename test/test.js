import assert from "assert";
import sinon from "sinon";
import ICS from "../ics/index.js";
import ICSEvent from "../ics/icsEvent.js";
import InvalidEventError from "../ics/errors/invalidEventError.js";
import NoEventsError from "../ics/errors/noEventsError.js";

const cal = new ICS();

const empty_event = new ICS.Event();
Object.freeze(empty_event);

const valid_event = new ICS.Event();
valid_event.subject = "Event 1";
valid_event.start = new Date();
valid_event.end = new Date();
Object.freeze(valid_event);

const invalid_event = new ICS.Event();
invalid_event.subject = "Invalid Event";
Object.freeze(invalid_event);

describe("ICS", function() {
  beforeEach(function() {
    cal.reset();
  });

  describe("::Event", function() {
    it("returns the Event class", function() {
      assert.equal(ICS.Event, ICSEvent);
    });
  });

  describe("#constructor()", function() {
    it("should create a new instance of ICS", function() {
      assert.equal(cal instanceof ICS, true);
    });

    it("should have an empty `_events` instance property", function() {
      assert.deepEqual(cal._events, []);
    });
  });

  describe("#events()", function() {
    it("should not be mutable", function() {
      assert.throws(() => cal.events().push(valid_event), TypeError);
    });

    describe("with no events", function() {
      it("should return an empty array", function() {
        assert.deepEqual(cal.events(), []);
      });
    });

    describe("with some events", function() {
      it("should return an array with two ICSEvent objects", function() {
        cal.addEvent(valid_event);
        assert.deepEqual(cal.events(), [valid_event]);
      });
    });
  });

  describe("#addEvent(event)", function() {
    describe("with a valid event", function() {
      it("should add an ICSEvent", function() {
        cal.addEvent(valid_event);
        assert.deepEqual(cal.events(), [valid_event]);
      });
    });

    describe("with an invalid event", function() {
      it("should throw an InvalidEventError", function() {
        assert.throws(() => cal.addEvent(invalid_event), InvalidEventError);
      });
    });
  });

  describe("#reset()", function() {
    it("should remove all events", function() {
      cal.addEvent(valid_event);
      cal.reset();
      assert.deepEqual(cal.events(), []);
    })
  });

  describe("#toString()", function() {
    describe("with no events", function() {
      it("should throw a NoEventsError", function() {
        assert.throws(() => cal.toString(), NoEventsError);
      });
    });

    describe("with some events", function() {
      it("should return a string", function() {
        cal.addEvent(valid_event);
        assert.equal(typeof cal.toString(), "string");
      });
    });
  });

  describe("#toBlob()", function() {
    describe("with no events", function() {
      it("should throw a NoEventsError", function() {
        assert.throws(() => cal.toBlob(), NoEventsError);
      });
    });

    describe("with some events", function() {
      it("should return a Blob instance", function() {
        cal.addEvent(valid_event);
        assert.equal(cal.toBlob() instanceof Blob, true);
      });
    });
  });

  describe("#toBase64()", function() {
    describe("with no events", function() {
      it("should throw a NoEventsError", function() {
        assert.throws(() => cal.toBase64(), NoEventsError);
      });
    });

    describe("with some events", function() {
      it("should return a string starting with 'data:text/calendar,'", function() {
        cal.addEvent(valid_event);
        assert.equal(typeof cal.toBase64(), "string");
        assert.equal(cal.toBase64().startsWith("data:text/calendar,"), true);
      });
    });
  });
});

describe("ICSEvent", function() {
  describe("#constructor()", function() {
    it("should create a new instance of ICSEvent", function() {
      assert.equal(empty_event instanceof ICSEvent, true);
    });

    it("should have null prop values", function() {
      assert.equal(empty_event.subject, null);
      assert.equal(empty_event.description, null);
      assert.equal(empty_event.location, null);
      assert.equal(empty_event.start, null);
      assert.equal(empty_event.end, null);
    });
  });

  describe("#isValid()", function() {
    describe("should return true if valid", function() {
      assert.equal(valid_event.isValid(), true);
    });

    describe("should return false if invalid", function() {
      assert.equal(invalid_event.isValid(), false);
    });
  });

  describe("#toString()", function() {
    describe("with a valid event", function() {
      it("should return a string", function() {
        assert.equal(typeof valid_event.toString(), "string");
      });
    });

    describe("with an invalid event", function() {
      it("should throw an InvalidEventError", function() {
        assert.throws(() => invalid_event.toString(), InvalidEventError);
      });
    });
  });

  describe("::dateToICSFormat(date)", function() {
    describe("with a valid date", function() {
      it("should return a string", function() {
        assert.equal(typeof ICSEvent.dateToICSFormat(new Date()), "string");
      });
    });

    describe("with an invalid date", function() {
      it("should throw a TypeError", function() {
        assert.throws(() => ICSEvent.dateToICSFormat("Mar 7, 1991"), TypeError);
      });
    });
  });
});
