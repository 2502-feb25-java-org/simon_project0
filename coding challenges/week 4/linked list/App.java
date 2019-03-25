
public class App {
	public static void main(String[] args) {
		customList list = new customList();
		//make list and populate it
		for (int i = 0; i < 10; i++) {
			list.insert(i*10);
			
		}
		//print values of nodes
		list.show();
	
		
	}
}
