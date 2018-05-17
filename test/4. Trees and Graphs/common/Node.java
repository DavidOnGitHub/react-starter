package common;

import java.util.ArrayList;

public class Node {
  public String name;
  public ArrayList<Node> children;
  public boolean visited;

  public Node(String name) {
    this.name = name;
    this.children = new ArrayList<Node>();
    visited = false;
  }

  public Node add(Node n) {
    this.children.add(n);
    return this;
  }

  public void markVisited() {
    this.visited = true;
  }
}
