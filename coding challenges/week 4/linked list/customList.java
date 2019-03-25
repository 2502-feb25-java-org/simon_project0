
public class customList {
	//linked list starts with a head
	Node head;
	public void insert(int data) {
		Node node = new Node(data);
		node.data = data;
		node.next=null;
		//if no other element, first node becomes head
		if(head==null) {
			head=node;
		}
		//traverse the list till u find the last node that points to null
		else {
			Node n = head;
			while (n.next!=null) {
				n=n.next;
			}
			n.next= node;
		}
	}
	//print data values of nodes
	public void show() {
		Node node = head;
		while(node.next!=null) {
			System.out.println(node.data);
			node=node.next;
		}
	}
}
