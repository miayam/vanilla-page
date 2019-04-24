module.exports = function () {
    let env;
    if (process.env.NODE_ENV === undefined) {
        env = 'dev';
    }
    env = process.env.NODE_ENV
    return require(`./config/webpack.${env}.config.js`);
};