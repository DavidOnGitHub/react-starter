import java.util.*;

class Main {
  public static void main(String args[]) {
    System.out.println(isPermutation("abcdefg", "cadebff"));
  }

  public static boolean isPermutation(String str1, String str2) {
	  if (str1.length() != str2.length()) return false;
	  if (str1.length() == 1) return str1.equals(str2);
	  String subStr1 = str1.substring(1);
	  String subStr2 = str2.replaceFirst(String.valueOf(str1.charAt(0)), "");
	  return isPermutation(subStr1, subStr2);
  }
}