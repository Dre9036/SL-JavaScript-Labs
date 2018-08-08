// 30Z DOM Tree JAVASCRIPT

/* The DOM represents a document as a tree structure.
HTML elements become interrelated nodes in the tree.
All those nodes in the tree have some kind of relations among each other. 
Nodes can have child nodes. Nodes on the same tree level are called siblings.
For example, consider the following structure: */

// IMAGE

/* For the example above:
<html> has two children (<head>, <body>);
<head> has one child (<title>) and one parent (<html>);
<title> has one parent (<head>) and no children;
<body> has two children (<h1> and <a>) and one parent (<html>); */

// It is important to understand the relationships between elements in an HTML document in order to be able to manipulate them with JavaScript.