
export default function protegeRutas(context) {
    //console.log('MIDDLEWARE !!!!');
    //console.log(context.store.state.colors.color);

    console.log(context.route.path);

    if (context.route.path == '/tres' && context.store.state.colors.color !== 'red'){
       context.redirect('/');
    }    
}