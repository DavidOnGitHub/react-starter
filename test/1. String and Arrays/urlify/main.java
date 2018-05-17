import java.util.*;

class Main {
  public static void main(String args[]) {
    System.out.println(urlify("Mr John Smith    "));
  }

  public static String urlify(String str) {
	  char[] chars = str.toCharArray();
	  int length = chars.length;
	  char[] result = new char[length];
	  boolean startReplacing = false;
	  int j = length - 1;
	  for (int i = length - 1; i >= 0; i--) {
		  if (chars[i] != ' ') startReplacing = true;
		  
		  if (startReplacing) {
			  if (chars[i] == ' ') {
				  result[j--] = '%';
				  result[j--] = '0';
				  result[j--] = '2';
			  } else {
				  result[j--] = chars[i];
			  }
		  }
	  }
	  return new String(result);
  }
}