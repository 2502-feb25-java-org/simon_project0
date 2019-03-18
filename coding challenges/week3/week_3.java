package temp;

import java.util.ArrayList;

public class main {

	public static void main(String[] args) {
		//array list to hold the strings and palindromes
		ArrayList<String> total = new ArrayList();
		ArrayList<String> pally = new ArrayList();
		//string array to hold the strings until put in arraylist (possibly can cut out the middle step)
		String[] stringies = {"karan", "madam", "tom", "civic", "radar", "sexes", "jimmy", "kayak", "john", "refer", "billy", "did"};
		for (String item : stringies) {
			total.add(item);
		}
		//init helper variables
		int length;
		String rev;
		for (String item : total) {
			//reset "reverse" and "length" to have current string properties
			rev = "";
			length=item.length();
			for (int i = length - 1; i >= 0; i--)
				//forge reverse string
		         {rev = rev + item.charAt(i);}
			if (item.equals(rev)) {
				//add to palindrome array if it equals
		         pally.add(item);}
			
		}
		System.out.println(pally);
		
		
	
	}

}
