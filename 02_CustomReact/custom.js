// function customRender(reactElement,mainContainer){
//     const domElement = document.createElement(reactElement.type)  //THere can be more element like reactelement, so to make it more uniqur we put type as an attribute inside react element
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     mainContainer.appendChild(domElement)
// }

//  ************************** Alternative ********************

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'CLICK ME to visit google '
} 

function customRender(reactElement , mainContainer){
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop == reactElement.children) continue
    domElement.setAttribute(prop,reactElement.props[prop])    // Passing the index as prop
    }
    mainContainer.appendChild(domElement)
}

const mainContainer = document.getElementById("root")

customRender(reactElement , mainContainer)