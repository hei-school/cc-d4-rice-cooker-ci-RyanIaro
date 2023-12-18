module.exports = {
    presets: [
		['@babel/preset-env', {targets: {node: 'current'}}],
	    '@babel/preset-typescript',
    ],
  };
module.exports = api => {
    const isTest = api.env('test');
  
    return {
    };
};