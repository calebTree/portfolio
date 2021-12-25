if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

// import css
function requireAll_css(r) { r.keys().forEach(r); }
requireAll_css(require.context('./css', true, /\.css$/i));
