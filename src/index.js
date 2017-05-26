export default (element, { offset = 0, threshold = 0 } = {}) => {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = element.getBoundingClientRect()

  const intersection = {
    t: bottom,
    r: window.innerWidth - left,
    b: window.innerHeight - top,
    l: right
  }

  const elementThreshold = {
    x: threshold * width,
    y: threshold * height
  }

  return (
    intersection.t >= (offset.top || offset + elementThreshold.y) &&
    intersection.r >= (offset.right || offset + elementThreshold.x) &&
    intersection.b >= (offset.bottom || offset + elementThreshold.y) &&
    intersection.l >= (offset.left || offset + elementThreshold.x)
  )
}
