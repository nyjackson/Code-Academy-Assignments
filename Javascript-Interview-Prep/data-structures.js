class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
    getNextNode(){
       return this.next
    }

    setNextNode(node){

        if(node === null || node instanceof Node){
            this.next = node
        }
        else{
            throw new Error('Node must be a member of Node class.')
        }
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addToHead(data){
        const newHead = new Node(data) 
        const currentHead = this.head
        this.head = newHead
        if(currentHead){
            this.head.setNextNode(currentHead)
        }
    }

    addToTail(data){
        let tail = this.head 
        if(!tail){
            this.head = new Node(data)
        }
        else{
            while(tail.getNextNode() != null){
                tail = tail.getNextNode()
            }
            tail.setNextNode(new Node(data))
        }
    }

    removeHead(){
        let removedHead = this.head
        if(!removedHead){
            return
        }
        this.head = removedHead.getNextNode()
        return removedHead.data
    }

    printList(){
        let currentNode = this.head
        let output = '<head> '
        while(currentNode !== null){
            output+= currentNode.data + " "
            currentNode = currentNode.getNextNode()
        }
        output+='<tail>'
        console.log(output)
    }

}

const fruits = new LinkedList()
fruits.printList()
fruits.addToHead('cherry')
fruits.addToHead('strawberry')
fruits.addToHead('banana')
fruits.printList()
fruits.addToTail('kiwi')
fruits.addToTail('mango')
fruits.printList()
fruits.removeHead()
fruits.printList()


class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      if (currentHead) {
        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead);
      }
      this.head = newHead;
      if (!this.tail) {
        this.tail = newHead;
      }
    }
  
    addToTail(data) {
      const newTail = new Node(data);
      const currentTail = this.tail;
      if (currentTail) {
        currentTail.setNextNode(newTail);
        newTail.setPreviousNode(currentTail);
      }
      this.tail = newTail;
      if (!this.head) {
        this.head = newTail;
      }
    }
  
    removeHead() {
      const removedHead = this.head;
      if (!removedHead) {
        return;
      }
      this.head = removedHead.getNextNode();
      if (this.head) {
        this.head.setPreviousNode(null);
      }
      if (removedHead === this.tail) {
        this.removeTail();
      }
      return removedHead.data;
    }
  
    removeTail() {
      const removedTail = this.tail;
      if (!removedTail) {
        return;
      }
      this.tail = removedTail.getPreviousNode();
      if (this.tail) {
        this.tail.setNextNode(null);
      }
      if (removedTail === this.head) {
        this.removeHead();
      }
      return removedTail.data;
    }
  
    removeByData(data) {
      let nodeToRemove;
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.data === data) {
          nodeToRemove = currentNode;
          break;
        }
        currentNode = currentNode.getNextNode();
      }
      if (!nodeToRemove) {
        return null;
      }
      if (nodeToRemove === this.head) {
        this.removeHead();
      } else if (nodeToRemove === this.tail) {
        this.removeTail();
      } else {
        const nextNode = nodeToRemove.getNextNode();
        const previousNode = nodeToRemove.getPreviousNode();
        nextNode.setPreviousNode(previousNode);
        previousNode.setNextNode(nextNode);
      }
      return nodeToRemove;
    }
  
    printList() {
      let currentNode = this.head;
      let output = '<head> ';
      while (currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
      output += '<tail>';
      console.log(output);
    }
  }
  