import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CountWordAppearance {
    private Map<String, Integer> wordCountMap = new HashMap<>();

    public void countWordsInFile(String filePath) {
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath))) {
            String line;

            while ((line = bufferedReader.readLine()) != null) {
                processLine(line);
            }

            printWordsCount();
            printMostFrequentWord();
        } catch (IOException e) {
            System.out.println("Error while reading the file: " + e.getMessage());
        }
    }

    private void processLine(String line) {
        String[] words = line.toLowerCase().split("\\W+");
        for (String word : words) {
            if (!word.isEmpty()) {
                wordCountMap.put(word, wordCountMap.getOrDefault(word, 0) + 1);
            }
        }
    }

    private void printWordsCount() {
        System.out.println("List of words and their frequency:");
        for (Map.Entry<String, Integer> entry : wordCountMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }

    private void printMostFrequentWord() {
        String mostFrequent = null;
        int maxCount = 0;

        for (Map.Entry<String, Integer> entry : wordCountMap.entrySet()) {
            if (entry.getValue() > maxCount) {
                mostFrequent = entry.getKey();
                maxCount = entry.getValue();
            }
        }

        System.out.println("\nMost frequent word: " + mostFrequent + " (" + maxCount + " times)");
    }
}
