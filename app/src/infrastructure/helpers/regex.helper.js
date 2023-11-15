export default {
  CVC: /^[0-9]{3,4}$/,
  CARD: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
  IBAN: /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\!\@\#\$\%\&\*])(?=.{8,})/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  FLOAT: /^[+-]?\d+(\.\d+)?$/,
  URL: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+[a-zA-Z0-9\/?=&#%-_.~!*'()]*$/,
};
