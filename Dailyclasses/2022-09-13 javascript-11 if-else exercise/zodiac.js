const month = prompt("Select any month from 1-12");
const day = prompt("Select any day from 1-31(depends on month)");

function whatIsMyZodiac({ m, d }) {
  if (m <= 12 && d <= 31 && m > 0 && d > 0) {
    // nested conditioning
    if ((m == 12 && d >= 22) || (m == 1 && d <= 19)) {
      console.log("Your ZODIAC is CAPRICORN");
    } else if ((m == 1 && d >= 20) || (m == 2 && d <= 17)) {
      console.log("Your ZODIAC is AQUARIUS");
    } else if ((m == 2 && d >= 18 && d <= 29) || (m == 3 && d <= 19)) {
      console.log("Your ZODIAC is PISCES");
    } else if ((m == 3 && d >= 20) || (m == 4 && d <= 19)) {
      console.log("Your ZODIAC is ARIES");
    } else if ((m == 4 && d >= 20 && d < 31) || (m == 5 && d <= 20)) {
      console.log("Your ZODIAC is Taurus");
    } else if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) {
      console.log("Your ZODIAC is GEMINI");
    } else if ((m == 6 && d >= 21 && d < 31) || (m == 7 && d <= 22)) {
      console.log("Your ZODIAC is CANCER");
    } else if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) {
      console.log("Your ZODIAC is LEO");
    } else if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) {
      console.log("Your ZODIAC is VIRGO");
    } else if ((m == 9 && d >= 23 && d < 31) || (m == 10 && d <= 22)) {
      console.log("Your ZODIAC is LIBRA");
    } else if ((m == 10 && d >= 23) || (m == 11 && d <= 21)) {
      console.log("Your ZODIAC is SCORPIO");
    } else if ((m == 11 && d >= 22 && d < 31) || (m == 12 && d <= 21)) {
      console.log("Your ZODIAC is SAGITTARIUS");
    } else {
      console.log(
        "Please check your Date of birth and enter correct month and date"
      );
    }
  } else {
    console.log("Please enter a proper date or month");
  }
}

whatIsMyZodiac({ m: month, d: day });
