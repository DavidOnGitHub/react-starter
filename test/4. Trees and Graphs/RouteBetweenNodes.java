import common.DirectedGraph;
import common.Node;
import java.util.ArrayDeque;

class RouteBetweenNodes {
  public static void main(String[] args) {
    DirectedGraph graph = new DirectedGraph();
    Node a = new Node("a");
    Node b = new Node("b");
    Node c = new Node("c");
    Node d = new Node("d");
    Node e = new Node("e");

    a.add(b);
    b.add(c);
    c.add(e);
    d.add(e);

    graph.add(a).add(b).add(c).add(d).add(e);

    System.out.println(RouteBetweenNodes.routeBetween(a, d));
  }

  private static boolean routeBetween(Node start, Node end) {
    ArrayDeque<Node> nodesToCheck = new ArrayDeque<Node>();
    nodesToCheck.add(start);

    while (!nodesToCheck.isEmpty()) {
      Node node = nodesToCheck.remove();
      if (node.children.size() > 0) {
        for (Node n: node.children) {
          if (n == end) {
            return true;
          }
          if (!n.visited) {
            n.visited = true;
            nodesToCheck.add(n);
          }
        }
      }
    }

    return false;
  }
}
