

const logger = store => next => action => {
    console.group(action.type)
        console.log('Action Taken: ', action)
        const rValue = next(action)
        console.log('New state is: ', store.getState())
    console.groupEnd()
    return rValue
}

export default logger;