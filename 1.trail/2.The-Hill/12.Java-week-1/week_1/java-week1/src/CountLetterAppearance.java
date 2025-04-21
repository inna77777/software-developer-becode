import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Map;
import java.util.TreeMap;

public class CountLetterAppearance {

    public void processFile(String fileName) {
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            int lineNumber = 1;

            while ((line = br.readLine()) != null) {
                System.out.println("Line " + lineNumber + ": " + line);
                Map<Character, Integer> letterCount = countLetters(line);
                printLetterCounts(letterCount);
                printMostFrequentLetter(letterCount);
                System.out.println();
                lineNumber++;
            }

        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }

    private Map<Character, Integer> countLetters(String line) {
        Map<Character, Integer> letterCount = new TreeMap<>();
        for (char c : line.toLowerCase().toCharArray()) {
            if (Character.isLetter(c)) {
                letterCount.put(c, letterCount.getOrDefault(c, 0) + 1);
            }
        }
        return letterCount;
    }

    private void printLetterCounts(Map<Character, Integer> letterCount) {
        for (Map.Entry<Character, Integer> entry : letterCount.entrySet()) {
            System.out.println("  " + entry.getKey() + ": " + entry.getValue());
        }
    }

    private void printMostFrequentLetter(Map<Character, Integer> letterCount) {
        if (letterCount.isEmpty()) {
            System.out.println("  ➤ No letters found.");
            return;
        }

        char mostFrequent = 0;
        int maxCount = 0;

        for (Map.Entry<Character, Integer> entry : letterCount.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }

        System.out.println("  ➤ Most frequent letter: '" + mostFrequent + "' (appeared " + maxCount + " times)");
    }
}
