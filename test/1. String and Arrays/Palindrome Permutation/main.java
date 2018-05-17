import java.util.*;

class Main {
  public static void main(String args[]) {
    System.out.println(isPalPerm("tarc arct"));
  }

  public static boolean isPalPerm(String str) {
		BitSet flags = new BitSet();
		for (int i = 0; i < str.length(); i++) {
			int offset = str.charAt(i);
			if (offset != 32) {
				flags.set(offset, !flags.get(offset));
			}
		}
		return flags.cardinality() == 1;
  }
}