// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
    this.currentId = 0
}

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function (id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function (id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

AddressBook.prototype.updateContact = function (id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        if (contact.firstName != inputtedFirstName) {
          (contact.firstName).text(inputtedFirstName)
        }
        if (contact.lastName != inputtedLasttName) {
          (contact.lastName).text(inputtedLastName)
        }
        if (contact.phoneNumber != inputtedPhoneNumber) {
          (contact.phoneNumber).text(inputtedphoneNumber)
        }
        if (contact.address != inputtedaddress) {
          (contact.address).text(inputtedaddress)
        }
        if (contact.email != inputtedemail) {
          (contact.email).text(inputtedemail)
        }
      }
    };
    return false;
  }
}

  // function Email(email, typeOfEmail){

  // }

  // Business Logic for Contacts ---------
  function Contact(firstName, lastName, phoneNumber, address, workEmail, personalEmail) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.phoneNumber = phoneNumber,
      this.address = address,
      this.email = {
        work: workEmail,
        personal: personalEmail
      };
  }

  Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  }

  // User Interface Logic ---------
  var addressBook = new AddressBook();

  // function displayAddressDetails(addressBookToDisplay) {
  //   var contactsList = $("ul#address");
  //   var htmlForContactInfo = "";
  //   addressBookToDisplay.contacts.forEach(function(contact) {
  //     htmlForContactInfo += "<li id=" + contact.id + ">" + " " + contact.phoneNumber + " " + contact.address + " " + contact.email + "</li>";
  //   });
  //   contactsList.html(htmlForContactInfo);
  // }

  function displayContactDetails(addressBookToDisplay) {
    var contactsList = $("ul#contacts");
    var htmlForContactInfo = "";
    addressBookToDisplay.contacts.forEach(function (contact) {
      htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
    });
    contactsList.html(htmlForContactInfo);
  };

  function showContact(contactId) {
    var contact = addressBook.findContact(contactId);
    $("#show-contact").show();
    $(".first-name").html(contact.firstName);
    $(".last-name").html(contact.lastName);
    $(".phone-number").html(contact.phoneNumber);
    $(".address").html(contact.address);
    $(".email").html(contact.email);
  };

  function attachContactListeners() {
    $("ul#contacts").on("click", "li", function () {
      showContact(this.id);
    });
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  }

  $(document).ready(function () {
    attachContactListeners();
    $("form#new-contact").submit(function (event) {
      event.preventDefault();
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedPhoneNumber = $("input#new-phone-number").val();
      var inputtedAddress = $("input#new-address").val();
      var inputtedWorkEmail = $("input#work-email").val();
      var inputtedPersonalEmail = $("input#personal-email").val();
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input#new-phone-number").val("");
      $("input#new-address").val("");
      $("input#work-email").val("");
      $("input#personal-email").val("");
      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedAddress, inputtedWorkEmail, inputtedPersonalEmail);
      addressBook.addContact(newContact);
      addressBook.updateContact();
      displayContactDetails(addressBook);

      // displayAddressDetails(addressBook);
    });
  });