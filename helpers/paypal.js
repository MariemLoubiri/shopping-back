const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ATxA3WIMcWNbFdkTVuDXLpwo_RKVaa6FidSPdn0305XH8ajH5fn7GtAChLSfSDgCtfY5w4n1_W_Imw1Q",
  client_secret: "ED_wHrpzqcQox_mqf3eKkHiMNVahskLd-pip-fcWNUTnnkxFC5na6ayC4B-jkdg5lscKh-dc2vkapseQ",
});

module.exports = paypal;