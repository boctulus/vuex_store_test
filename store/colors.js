export const state = () => ({
    color: 'green'
});

export const mutations = {
    setColor(state, val) {
        state.color = val;
    }
}