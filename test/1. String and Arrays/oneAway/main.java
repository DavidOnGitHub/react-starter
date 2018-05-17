import java.util.*;

class Main {
  public static void main(String args[]) {
    System.out.println(isOneAway(args[0], args[1]));
  }
	
	public static boolean isOneAway(String str1, String str2) {
		int difference = 0;
		if (Math.abs(str1.length() - str2.length()) > 1) return false;
		
		String shortStr = str1;
		String longStr = str2;
		if (str1.length() - str2.length() == 1) {
			shortStr = str2;
			longStr = str1;
		}
		for (int i = 0; i < shortStr.length(); i++) {
			if (shortStr.length() == longStr.length()) {
				if (shortStr.charAt(i) != longStr.charAt(i)) {
					difference ++;
					if (difference > 1) return false;
				}
			} else if (shortStr.charAt(i) != longStr.charAt(i + difference)) {
				difference ++;
				i--;
				if (difference > 1) return false;
			}
		}
		return true;
	}
}