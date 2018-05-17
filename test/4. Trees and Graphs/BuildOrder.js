const { SinglyLinkedList, TreeNode, LinkedListNode, printLinkedList } = require('./common/utils')

const projects = ['a', 'b', 'c', 'd', 'e', 'f']
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]

const getNode = (nodes, project) => {
  const node = nodes.find(node => node.value === project)
  if (!node) throw new Error('project not found for ' + project)
  return node
}

const constructGraph = (projects, dependencies) => {
  const nodes = projects.map(project => new TreeNode(project))
  dependencies.forEach(dependency => {
    const [d1, d2] = dependency
    getNode(nodes, d1).add(getNode(nodes, d2))
  })
  return nodes
}

const nodes = constructGraph(projects, dependencies)

const findRootNodes = (nodes) => nodes.filter(node => node.parents.length === 0)

const buildOrder = (nodes) => {
  const result = []
  let roots = findRootNodes(nodes)

  while (roots.length > 0) {
    roots.forEach(root => {
      root.removeOutgoingEdges()
      result.push(root.value)
      nodes.splice(nodes.indexOf(root), 1)
    })
    roots = findRootNodes(nodes)
  }

  if (nodes.length > 0) throw new Error('circular dependency detected!')

  return result.join('->')
}

console.log(buildOrder(nodes))


