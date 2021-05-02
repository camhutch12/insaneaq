export const createSnail = (snail) => {
    return {
        type: "CREATE_SNAIL",
        payload:{
            snail
        }

    }
}

export const resetSnail = (snail) => {
    return {
        type: "RESET",
        payload:{
            snail
        }

    }
}