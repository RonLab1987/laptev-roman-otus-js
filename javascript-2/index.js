/**
 * Reducer function
 * @param memo
 * @param value
 * @returns {number}
 */
function reducer(memo = 1, value) {
  console.log('reducer')
  return memo * value
}

/**
 * promiseReduce - homework function
 *
 * Use runRandomizePromiseReduce() for check work
 *
 * @param promises
 * @param reducer
 * @param initialValue
 * @returns {Promise<any>}
 */
function promiseReduce(promises = [], reducer, initialValue) {
  return new Promise(async (resolve, reject) => {
    let memo = initialValue
    for(let promise of promises) {
      try {
        const response = await promise()
        memo = reducer(memo, response)
      } catch (error) {
        reject(error)
        return
      }
    }
    resolve(memo)
  })
}

/**
 * Infrastructure section for check promiseReduce function:
 */

/**
 * Run promise reduce with preset
 * @param count
 * @param mustFail
 */
function runRandomizePromiseReduce(count = 5, mustFail = false) {
  promiseReduce(
    getAsyncFunctionsArray(count, mustFail),
    reducer
  ).then((result) => {
    console.log('reduce result: ', result)
  }).catch((error) => {
    console.error(error)
  })
}

/**
 * Get random int by multiplier
 * @param multiplier
 * @returns {number}
 */
function getRandomIntByMultiplier(multiplier = 10) {
  return  Math.floor((Math.random() + 0.1) * multiplier)
}

/**
 * Return promise with random int result resolved after random timeout
 * @returns {Promise<number>}
 */
function randomizeAsyncFunction() {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        const response = getRandomIntByMultiplier(10)
        console.log('randomize response: ', response)
        resolve(response)
      },
      getRandomIntByMultiplier(500)
    )
  })
}

/**
 * Return rejected promise
 * @returns {Promise<never>}
 */
function failedAsyncFunction() {
  return Promise.reject(new Error('rejected promise for test'))
}

/**
 * Make randomize async function list by params
 * @param count
 * @param fail
 * @returns {Array<function>}
 */
function getAsyncFunctionsArray(count = 2, fail = false) {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push(randomizeAsyncFunction)
  }
  if (fail === true) {
    list.splice(getRandomIntByMultiplier(count), 1, failedAsyncFunction)
  }
  return list
}
