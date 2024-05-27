using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        string fileName = "sensitive.txt";
        string userInput = Console.ReadLine();

        // Security vulnerability: Path traversal attack
        string filePath = Path.Combine(Directory.GetCurrentDirectory(), userInput, fileName);

        if (File.Exists(filePath))
        {
            string content = File.ReadAllText(filePath);
            Console.WriteLine($"File content: {content}");
        }
        else
        {
            Console.WriteLine("File not found.");
        }
    }
}
