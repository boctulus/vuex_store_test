export const state = () => ({
    color: 'red'
});

export const mutations = {
    setColor(state, val) {
        state.color = val;
    }
}