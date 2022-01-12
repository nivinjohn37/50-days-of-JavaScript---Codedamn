const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
  // Write your solution here
  //Given a number from 0 to 999,999,999,999, spell out that number in English.
  //For example, given the number 5, return "five". Given the number 12, return "twelve".
  //Given the number 100, return "one hundred". Given the number 123, return "one hundred and twenty-three".
  //Given the number 1234, return "one thousand, two hundred and thirty-four". Given the number 12345, return "twelve thousand, three hundred and forty-five".
  //Given the number 123456, return "one hundred and twenty-three thousand, four hundred and fifty-six". Given the number 1234567, return "one million, two hundred and thirty-four thousand, five hundred and sixty-seven".
  //Given the number 12345678, return "one billion, two hundred and thirty-four million, five hundred and sixty-seven thousand, eight".
  //Given the number 123456789, return "one trillion, two hundred and thirty-four billion, five hundred and sixty-seven million, eight thousand, nine".
  //Given the number 1234567891, return "one quadrillion, two hundred and thirty-four trillion, five hundred and sixty-seven billion, eight million, nine thousand, one".
  //Given the number 123456789123, return "one quintillion, two hundred and thirty-four quadrillion, five hundred and sixty-seven trillion, eight million, nine thousand, one hundred and twenty-three".
  //Given the number 1234567891234, return "one sextillion, two hundred and thirty-four quintillion, five hundred and sixty-seven quadrillion, eight million, nine thousand, one hundred and twenty-three thousand, four hundred and thirty-four".
  //Given the number 12345678912345, return "one septillion, two hundred and thirty-four sextillion, five hundred and sixty-seven quintillion, eight million, nine thousand, one hundred and twenty-three thousand, four hundred and thirty-four".
  // Strings at index 0 is not used, it is to make array
  // indexing simple
  var one = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];

  // Strings at index 0 and 1 are not used, they is to
  // make array indexing simple
  var ten = [
    "",
    "",
    "twenty ",
    "thirty ",
    "forty ",
    "fifty ",
    "sixty ",
    "seventy ",
    "eighty ",
    "ninety ",
  ];
   // n is 1- or 2-digit number
   function numToWords(n, s)
   {
       var str = "";
       // if n is more than 19, divide it
       if (n > 19) {
           str += ten[parseInt(n / 10)] + one[n % 10];
       }
       else {
           str += one[n];
       }

       // if n is non-zero
       if (n != 0) {
           str += s;
       }

       return str;
   }

   // Function to print a given number in words
   function convertToWords(n)
   {
       // stores word representation of given number n
       var out = "";

       // handles digits at ten millions and hundred
       // millions places (if any)
       out += numToWords(parseInt(n / 10000000),
       "crore ");

       // handles digits at hundred thousands and one
       // millions places (if any)
       out += numToWords(parseInt((n / 100000) % 100),
       "lakh ");

       // handles digits at thousands and tens thousands
       // places (if any)
       out += numToWords(parseInt((n / 1000) % 100),
       "thousand ");

       // handles digit at hundreds places (if any)
       out += numToWords(parseInt((n / 100) % 10),
       "hundred ");

       if (n > 100 && n % 100 > 0) {
           out += "and ";
       }

       // handles digits at ones and tens places (if any)
       out += numToWords(parseInt(n % 100), "");

       return out;
   }
};

console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`);
