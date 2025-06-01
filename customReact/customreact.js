function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    
     // 1️⃣ Create an actual DOM element using the tag name in reactElement.type
    const domElement = document.createElement(reactElement.type)

    // 2️⃣ Set the inner content of the DOM element to the text in 'children'
    // In real React, children is usually inside props. But in our object, it’s at the top level.
    domElement.innerHTML = reactElement.children

    // 3️⃣ Loop over all props and set them as attributes on the DOM element
    for (const prop in reactElement.props) {
        // Skip 'children' if it exists in props (React includes children in props, we didn't here)
        // if(prop == reactElement.children) continue;
        if (prop === 'children') continue
        // children is a string key in the object reactElement so thus it is in single quotes
        // Set each attribute using setAttribute
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'

    // This object represents a virtual version of this JSX/HTML element:
    // <a href="https://google.com" target="_blank">Click me to visit google</a>

}

// ✅ Select the real DOM node where we want to "render" our custom React element
const mainContainer = document.querySelector('#root')

// ✅ Call our custom render function to inject the virtual element into the real DOM
customRender(reactElement, mainContainer)
