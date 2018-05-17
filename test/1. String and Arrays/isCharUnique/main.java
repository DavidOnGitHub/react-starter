import java.util.*;

class Test {
  public static void main(String args[]) {
    System.out.println(isCharsUnique("abcdefg"));
  }

  public static boolean isCharsUnique(String str) {
	BitSet checker = new BitSet(32);
    for (int i = 1; i < str.length(); i ++) {
		int character = str.charAt(i) - 'a';
		if (checker.get(character)) return false;
		checker.set(character);
	}
	return true;
  }
}