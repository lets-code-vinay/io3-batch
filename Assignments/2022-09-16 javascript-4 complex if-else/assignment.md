#Attempt the following:

1. Any character is entered through the keyboard, write a program to
   determine whether the character entered is a capital letter, a small case letter, a digit or a special symbol. The following table shows the range of ASCII values for various characters:

   | Characters      | ASCII values               |
   | --------------- | -------------------------- |
   | A--Z            | 65-90                      |
   | a--z            | 97-122                     |
   | 0--9            | 48-57                      |
   | Special Symbols | 0-47, 58-64, 91-96,123-127 |

2. A certain grade of steel is graded according to the following
   conditions:

   1. Hardness must be greater than 50
   2. Carbon content must be less than 0.7
   3. Tensile strength must be greater than 5600.

      **(The grades are as follows)**

      1. Grade is 10 if all three conditions are met
      2. Grade is 9 if conditions (i) and (ii) are met
      3. Grade is 8 if conditions (ii) and (iii) are met
      4. Grade is 7 if conditions (i) and (iii) are met
      5. Grade is 6 if only one condition is met
      6. Grade is 5 if none of the conditions are met

      Write a program, which will require the user to give values of hardness, carbon content and tensile strength of the steel under consideration and output the grade of the steel.

3. If the three sides of a triangle are entered through the keyboard,
   write a program to check whether the triangle is valid or not. The triangle is valid if the sum of two sides is greater than the largest of the three sides.

4. If the three sides of a triangle are entered through the keyboard,
   write a program to check whether the triangle is isosceles, equilateral, scalene or right angled triangle.

5. In boxing the weight class of a boxer is decided as per the following
   table. Write a program that receives weight as input and prints out the boxer's weight class.

   | **Boxer Class** | **Weight in Pounds** |
   | --------------- | -------------------- |
   | Flyweight       | <115                 |
   | BantamWeight    | 115-121              |
   | Featherweight   | 122-153              |
   | Middleweight    | 154-189              |
   | Heavyweight     | >=190                |

6. In digital world colors are specified in Red-Green-Blue (RGB) format,
   with values of R, G, B varying on an integer scale from 0 to 255. In print publishing the colors are mentioned in Cyan-Magenta-Yellow Black (CMYK) format, with values of C, M, Y, and K varying on a real scale from 0.0 to 1.0. Write a program that converts RGB color to CMYK color as per the following formulae:
   **Hint: White = Max(Red/255, Green/255, Blue/255)**
   **Cyan = (white-red/255)/white**
   **Magenta = (white-green/255)/white**
   **Yellow = (white-blue/255)/white**
   **Black= 1-white**
   _**Note**: that if the RGB values are all 0, then the CMY values are all 0 and the K value is 1._

7. Write a program that receives month and date of birth as input and
   prints the corresponding Zodiac sign based on the following table:

   | Sun sign    | From -To       |
   | ----------- | -------------- |
   | Capricorn   | Dec 22- Jan 19 |
   | Aquarius    | Jan 20- Feb 17 |
   | Pisces      | Feb 18- Mar 19 |
   | Aries       | Mar 22- Apr 19 |
   | Taurus      | Apr 20- May-20 |
   | Gemini      | May 21- Jun 20 |
   | Cancer      | Jun 21- Jul 22 |
   | Leo         | Jul 23- Aug 22 |
   | Virgo       | Aug 23- Sep 22 |
   | Libra       | Sep 23- Oct 22 |
   | Scorpio     | Oct 23- Nov 21 |
   | Sagittarius | Nov 22- Dec 21 |

8. The Body Mass Index (BMI) is defined as ratio of the weight of a person
   (in kilograms) to the square of the height (in meters). Write a program that receives weight and height, calculates the BMI, and reports the BMI category as per the following table:

   | **BMI Index**  | **BMI**      |
   | -------------- | ------------ |
   | Starvation     | <15          |
   | Anorexic       | 15.1 to 17.5 |
   | Underweight    | 17.6 to 18.5 |
   | Ideal          | 18.6 to 24.9 |
   | Overweight     | 25 to 25.9   |
   | Obese          | 30 to 30.9   |
   | Morbidly Obese | >=40         |

9. Using conditional operators determine:
   1. Whether the character entered through the keyboard is a
      lower case alphabet or not.
   2. Whether a character entered through the keyboard is a special
      symbol or not.
