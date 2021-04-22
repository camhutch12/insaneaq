export const createSnail = (snail) => {
    return {
        type: "CREATE_SNAIL",
        payload:{
            snail
        }

    }
}