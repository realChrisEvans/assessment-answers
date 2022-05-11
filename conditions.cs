// Given an integer, write a method that returns its absolute value.

// Example Output: AbsoluteValue (6832) => 6832
// Example Output: AbsoluteValue (-392) => 392

using System;

namespace CSharpExercies.Exercises.Conditional_statements
{
    class AbsoluteValueTask
    {
        static int AbsoluteValue(int number)
        {
            return number >= 0 ? number : -number;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(AbsoluteValue(-690543)); // 690543
            Console.WriteLine(AbsoluteValue(2744)); // 2744
            Console.WriteLine(AbsoluteValue(0)); // 0
            Console.WriteLine(AbsoluteValue(-23)); // 23
        }
    }
}

// Given two integers, write a method that returns their multiplication if they are both divisible by 2 or 3, otherwise returns thier sum.

// DivisibleBy2or3: (15, 30) => 450
// DivisibleBy2or3: (2, 90) => 180
// DivisibleBy2or3: (7, 12) => 19


namespace CSharpExercies.Exercises.Conditional_statements
{
    class DivisibleBy2or3Task
    {
        static int DivisibleBy2or3(int a, int b)
        {
            return (a % 2 == 0 || a % 3 == 0) && (b % 2 == 0 || b % 3 == 0) ? a * b : a + b;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(DivisibleBy2or3(2, 18)); // 36
            Console.WriteLine(DivisibleBy2or3(7, 0)); // 7
            Console.WriteLine(DivisibleBy2or3(33, 9)); // 297
            Console.WriteLine(DivisibleBy2or3(-72, 54)); // -3888
            Console.WriteLine(DivisibleBy2or3(24, -80)); // -1920
            Console.WriteLine(DivisibleBy2or3(444, 0)); // 0
        }
    }
}

// Given a 3 characters long string, write a method that checks if it consists only of uppercase letters.

// Expected input and output
// IfConsistsOfUppercaseLetters("xyz") → false
// IfConsistsOfUppercaseLetters("DOG") → true
// IfConsistsOfUppercaseLetters("L9#") → false

namespace CSharpExercises.Exercises.Conditional_statements
{
    class Program
    {
        static bool IfConsistsOfUppercaseLetters(string str)
        {
            return (str[0] >= 65 && str[1] >= 65 && str[2] >= 65) && (str[0] <= 90 && str[1] <= 90 && str[2] <= 90);
        }

        static void Main(string[] args)
        {
            Console.WriteLine(IfConsistsOfUppercaseLetters("drY")); // False 
            Console.WriteLine(IfConsistsOfUppercaseLetters("LOL")); // True
            Console.WriteLine(IfConsistsOfUppercaseLetters("N0t")); // False
            Console.WriteLine(IfConsistsOfUppercaseLetters("$1r")); // False
        }
    }
}

// Given an array of 3 integers, write a method that checks if multiplication or sum of two first numbers is greater than third one.

// Expected input and output
// IfGreaterThanThirdOne([2, 7, 12]) → true
// IfGreaterThanThirdOne([-5, -8, 50]) → false

namespace CSharpExercises.Exercises.Conditional_statements
{
    class IfGreaterThanThirdOneTask
    {
        static bool IfGreaterThanThirdOne(int[] arr)
        {
            return arr[0] + arr[1] > arr[2] || arr[0] * arr[1] > arr[2];
        }

        static void Main(string[] args)
        {
            Console.WriteLine(IfGreaterThanThirdOne(new int[] { 2, 8, 20 }));      // False
            Console.WriteLine(IfGreaterThanThirdOne(new int[] { 10, 5, 22 }));     // True
            Console.WriteLine(IfGreaterThanThirdOne(new int[] { -15, -25, 100 })); // True
            Console.WriteLine(IfGreaterThanThirdOne(new int[] { 11, 15, 166 }));   // False
        }
    }
}

// Given an integer, write a method that checks if it is even.

// Expected input and output
// IfNumberIsEven(721) → false
// IfNumberIsEven(1248) → true

namespace CSharpExercises.Exercises.Loops
{
    class IfNumberIsEvenTask
    {
        static bool IfNumberIsEven(int num)
        {
            return num % 2 == 0;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(IfNumberIsEven(8));          // True
            Console.WriteLine(IfNumberIsEven(54749));      // False
            Console.WriteLine(IfNumberIsEven(-43234670));  // True
            Console.WriteLine(IfNumberIsEven(0));          // True
            Console.WriteLine(IfNumberIsEven(-950541901)); // False
            Console.WriteLine(IfNumberIsEven(2140872324)); // True
        }
    }
}

// Given an array of three integers, write a method that checks if they are sorted in ascending order. 

// Expected input and output
// IfSortedAscending([3, 7, 10])→ true
// IfSortedAscending([74, 62, 99])→ false

namespace CSharpExercises.Exercises.Conditional_statements
{
    class IfSortedAscendingTask
    {
        static bool IfSortedAscending(int[] arr)
        {
            return arr[0] <= arr[1] && arr[1] <= arr[2];
        }

        static void Main(string[] args)
        {
            Console.WriteLine(IfSortedAscending(new int[] { 3, 6, 9 })); // True
            Console.WriteLine(IfSortedAscending(new int[] { 34, 17, 90 })); // False
            Console.WriteLine(IfSortedAscending(new int[] { -50, -24, -1 })); // True
        }
    }
}
