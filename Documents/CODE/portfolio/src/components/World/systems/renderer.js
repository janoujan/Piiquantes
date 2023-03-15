import { WebGLRenderer } from 'three'

function createRenderer () {
  const renderer = new WebGLRenderer()

  // turn on the physically correct lighting model
  renderer.useLegacyLights

  return renderer
}

export { createRenderer }
