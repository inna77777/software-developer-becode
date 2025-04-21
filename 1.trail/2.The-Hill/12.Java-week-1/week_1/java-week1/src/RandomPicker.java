import java.util.List;
import java.util.Random;

public class RandomPicker {
  private static final Random random = new Random();

  public static <T> T pickRandom(List<T> items) {
    return items.get(random.nextInt(items.size()));
  }
}

