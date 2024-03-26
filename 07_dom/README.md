
# HTML DOM Manipulation

HTML DOM (Document Object Model) manipulation allows you to interact with the structure of an HTML document dynamically using JavaScript. This enables you to modify the content, structure, and style of an HTML document in response to user actions or other events.

## Getting Elements

To manipulate elements in the DOM, you first need to select them. You can do this using various methods:
By ID, By Class Name and By Tag Name returns **HTMLCollections**.
By CSS Selector i.e., the querySelectorAll returns **NodeList**.

### By ID

```javascript
const elementById = document.getElementById('elementId');
```
Example:
```html
<div id="myDiv">Hello World!</div>
<script>
    const elementById = document.getElementById('myDiv');
    console.log(elementById.textContent); // Output: Hello World!
</script>
```

### By Class Name

```javascript
const elementsByClass = document.getElementsByClassName('className');
```
Example:
```html
<div class="myClass">Item 1</div>
<div class="myClass">Item 2</div>
<script>
    const elementsByClass = document.getElementsByClassName('myClass');
    console.log(elementsByClass.length); // Output: 2
</script>
```

### By Tag Name

```javascript
const elementsByTag = document.getElementsByTagName('tagName');
```
Example:
```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
<script>
    const elementsByTag = document.getElementsByTagName('p');
    console.log(elementsByTag.length); // Output: 2
</script>
```

### By CSS Selector

```javascript
const elementsBySelector = document.querySelector('cssSelector');
const elementsBySelectorAll = document.querySelectorAll('cssSelector');
```
Example:
```html
<div id="container">
    <p class="intro">Introduction</p>
    <p class="content">Content</p>
</div>
<script>
    const elementBySelector = document.querySelector('.intro');
    console.log(elementBySelector.textContent); // Output: Introduction

    const elementsBySelectorAll = document.querySelectorAll('p');
    elementsBySelectorAll.forEach(element => {
        console.log(element.textContent);
    });
    // Output:
    // Introduction
    // Content
</script>
```

### Handling HTMLCollections:
We need to convert this to an array to be able to perform iteration operations on this.
```javascript
const ele =  document.getElementByClassName('<ClassName>');
const arrayFrom = Array.from(ele); // Method-1
const arrayFromSpread = [...htmlCollection];  // Method-2
```

### Handling NodeList:
NodeList has an inbuilt iterator `forEach(<callback-fn>)`
```javascript
const ele =  document.querySelectorAll('.<ClassName>');
ele.forEach( (item) => {
	console.log(item.innerText);
} )
```
We can convert this to an array to be able to perform iteration operations on this.
```javascript
const ele =  document.querySelectorAll('.<ClassName>');
const arrayFrom = Array.from(ele); // Method-1
const arrayFromSpread = [...htmlCollection];  // Method-2
```

## Manipulating Elements

Once you've selected an element, you can manipulate it in different ways:

### Difference between `innerHTML`, `innerText` & `textContent`
#### Key Differences:

1.  **Handling of HTML:** `innerHTML` treats content as HTML and includes HTML tags, `innerText` and `textContent` treat content as plain text and ignore HTML tags.
    
2.  **Visibility:** `innerText` only includes text that's directly visible, while `textContent` includes all text content, including hidden text.
    
3.  **Performance:** `textContent` and `innerText` are generally faster than `innerHTML` because they don't trigger re-parsing or re-rendering of the content.

### Changing Content

```javascript
element.innerHTML = 'New content'; // Change inner HTML
element.textContent = 'New text'; // Change text content
```
Example:
```html
<div id="myDiv">Hello World!</div>
<script>
    const element = document.getElementById('myDiv');
    element.textContent = 'Goodbye World!';
</script>
```

### Changing Attributes

```javascript
element.setAttribute('attributeName', 'value');
element.removeAttribute('attributeName');
```
Example:
```html
<img id="myImage" src="image.jpg">
<script>
    const image = document.getElementById('myImage');
    image.setAttribute('alt', 'New image');
</script>
```

### Changing Styles

```javascript
element.style.property = 'value';
```
Example:
```html
<div id="myDiv">Hello World!</div>
<script>
    const element = document.getElementById('myDiv');
    element.style.color = 'blue';
</script>
```

### Adding or Removing Classes

```javascript
element.classList.add('className');
element.classList.remove('className');
```
Example:
```html
<div id="myDiv" class="box">Hello World!</div>
<script>
    const element = document.getElementById('myDiv');
    element.classList.add('highlight');
</script>
```

### Creating New Elements

```javascript
const newElement = document.createElement('tagName');
```
Example:
```html
<div id="container"></div>
<script>
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'New Paragraph';
    container.appendChild(newParagraph);
</script>
```

### Appending, Prepending, or Removing Elements

```javascript
parentElement.appendChild(newElement); // Append
parentElement.insertBefore(newElement, referenceElement); // Prepend
parentElement.removeChild(childElement); // Remove
```
Example:
```html
<div id="container">
    <p>Paragraph 1</p>
</div>
<script>
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Paragraph 2';

    // Append
    container.appendChild(newParagraph);

    // Prepend
    const referenceElement = container.firstChild;
    container.insertBefore(newParagraph, referenceElement);

    // Remove
    const paragraphToRemove = container.firstChild;
    container.removeChild(paragraphToRemove);
</script>
```

## Event Handling

You can also attach event listeners to elements to handle user interactions:

```javascript
element.addEventListener('eventName', eventHandlerFunction);
```
Example:
```html
<button id="myButton">Click me</button>
<script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log('Button clicked!');
    });
</script>
```

## Conclusion

HTML DOM manipulation is a powerful technique that allows you to dynamically modify the content and behavior of web pages. By understanding how to select elements and manipulate them using JavaScript, you can create interactive and responsive web applications.

