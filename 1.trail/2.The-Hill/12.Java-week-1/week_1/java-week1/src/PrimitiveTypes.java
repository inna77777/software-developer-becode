import java.lang.reflect.Field;

public class PrimitiveTypes {
    Integer b = 55;   // Integer is the object version of byte
    Short s = 10000;   // Short is the object version of short
    Integer i = 1000000;  // Integer is the object version of int
    Long l = 10000000L;   // Long is the object version of long
    Float f = 1.1f;   // Float is the object version of float
    Double d = 1.1d;   // Double is the object version of double
    Character c = 'c';   // Character is the object version of char
    Boolean bool = true;  // Boolean is the object version of boolean
    public void printTypes() {
        byte b = 55;
        short s = 10000;
        int i = 1000000;
        long l = 10000000;
        float f = 1.1f;
        double d = 1.1d;
        char c = 'c';
        boolean bool = true;
        System.out.println("byte: " + b + ", short: " + s + ", int: " + i + ", long: " + l +
                ", float: " + f + ", double: " + d + ", char: " + c + ", boolean: " + bool);
    }

    public void printObjectTypes() {
        System.out.println("Integer: " + b + ", Short: " + s + ", Integer: " + i + ", Long: " + l +
                ", Float: " + f + ", Double: " + d + ", Character: " + c + ", Boolean: " + bool);
    }

    public void loopAutomaticallyTypes() {
        try {
            // Get all the fields of the class (ObjectTypes class)
            Field[] fields = this.getClass().getDeclaredFields();

            // Iterate over the fields and print their values
            for (Field field : fields) {
                field.setAccessible(true);
                System.out.println(field.getName() + ": " + field.get(this));
            }
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
    }
}
