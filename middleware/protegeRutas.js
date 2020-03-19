
export default function protegeRutas(context) {
    if (context.route.path == '/tres' && context.store.state.colors.color !== 'red'){
       context.redirect('/');
    }    
}