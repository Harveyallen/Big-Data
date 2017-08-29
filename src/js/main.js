/**
 * Created by HARVEY on 2017/8/21.
 */
requirejs.config({
    baseUrl: './src/js',
    paths: {
        'jquery': 'lib/jquery'
    }
});

requirejs(['app/index']);