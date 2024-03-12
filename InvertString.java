public class InvertString {	

    public static String invertString(String s) {
        StringBuilder invertedString = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; i--) {
            invertedString.append(s.charAt(i));
        }
        return invertedString.toString();
    }

    public static void main(String[] args) {
        String originalString = "hello world";
        String invertedString = invertString(originalString);
        System.out.println("String original: " + originalString);
        System.out.println("String invertida: " + invertedString);
    }
}
