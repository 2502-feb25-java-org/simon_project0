package hexmaker;

import java.util.ArrayList;
import java.util.List;

public class App {
	public static void converter(int in) {
		List<Integer> stack = new ArrayList<Integer>();
		int result = in;
		int remainder;
		boolean looper=true;
		while(looper) {
			remainder = result%16;
			result=result/16;
			stack.add(remainder);
			if(result==0) {
				looper=false;
			}
		}
		StringBuilder out = new StringBuilder();
		for (Integer item : stack) {
			switch(item) {
			case 10: out.insert(0, 'A'); break;
			case 11:out.insert(0, 'B'); break;
			case 12:out.insert(0, 'C'); break;
			case 13:out.insert(0, 'D'); break;
			case 14:out.insert(0, 'E'); break;
			case 15:out.insert(0, 'F'); break;
				default:out.insert(0, item); break;
			}
		}
		System.out.println(out);
	}
public static void main(String[] args) {
	//call converter with value and will print the hex value
	converter(1000);
}
}
