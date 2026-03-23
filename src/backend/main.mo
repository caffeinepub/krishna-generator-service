import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    kvaRequirement : Nat;
  };

  module Inquiry {
    public func compareByName(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Text.compare(inquiry1.name, inquiry2.name);
    };
  };

  var nextId = 0;
  let inquiries = Map.empty<Nat, Inquiry>();

  public shared ({ caller }) func submitInquiry(
    name : Text,
    phone : Text,
    email : Text,
    message : Text,
    kvaRequirement : Nat,
  ) : async Nat {
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      message;
      kvaRequirement;
    };
    let id = nextId;
    inquiries.add(id, inquiry);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort(Inquiry.compareByName);
  };

  public query ({ caller }) func getInquiryById(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};
