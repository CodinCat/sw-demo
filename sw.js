const move = (s, t) => { t.push(s.pop()) }

const hanoi = (source, temp, target, n) => {
  if (n === 1) { return move(source, target) }
  hanoi(source, target, temp, n - 1)
  move(source, target)
  hanoi(temp, source, target, n - 1)
}

const createStack = n => [...(new Array(n)).keys()]

const runNewHanoi = n => {
  const a = createStack(n)
  const b = []
  const c = []

  console.log('Starting hanoi', a, b, c)
  console.time('WithWorker')
  hanoi(a, b, c, n)
  console.timeEnd('WithWorker')
  console.log('Finished', a, b, c)
}

onmessage = e => {
  if (e.data.cmd === 'start') {
    runNewHanoi(e.data.n)
    postMessage('finished')
  }
}