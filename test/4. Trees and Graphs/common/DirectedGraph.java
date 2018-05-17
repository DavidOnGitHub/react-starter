package common;

import java.util.ArrayList;

public class DirectedGraph {
  public ArrayList<Node> nodes;

  public DirectedGraph() {
    this.nodes = new ArrayList<Node>();
  }

  public DirectedGraph add(Node n) {
    this.nodes.add(n);
    return this;
  }
}
