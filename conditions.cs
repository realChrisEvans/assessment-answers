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

using System;

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

