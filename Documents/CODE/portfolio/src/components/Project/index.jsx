import styled from 'styled-components'
import { World } from '../World/World'

// create the main function
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container')

  // 1. Create an instance of the World app
  const world = new World(container)

  // 2. Render the scene
  world.render()
}

// call main to start the app
main()

export default function Project ({ title, text}) {
// const cube = new World() 
 return (
      <>
        <h3>{title}</h3>
        <article>{text}</article>
        
        
      </>
    )
}