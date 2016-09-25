/**
 * Created by littwin on 14.03.15.
 */
FrontRouterModule = angular.module('FrontRouter', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('print', {
                url: '/print',
                templateUrl: 'views/print.html',
                resolve: {
                    IPS: ['RSCom', function (RSCom) {
                        return RSCom.send("networkInterfaces",{});
                    }],
                    GSettingsR: ['GSettings',function(gs) {return gs.promise;}]
                },
                controller: 'GCodeController'
            })
            .state('control', {
                url: '/control',
                templateUrl: 'views/control.html',
                controller: 'ControlController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html'
            })
            .state('config', {
                url: '/config',
                templateUrl: 'views/config.html',
                resolve: {
                    IPS: ['RSCom', function (RSCom) {
                        return RSCom.send("networkInterfaces",{});
                    }]
                },
                controller: 'ConfigController'
            })
            .state('config.basic', {
                url: '/basic',
                templateUrl: 'views/config.basic.html',
                controller: 'ConfigBasicController'
            })
            .state('config.network', {
                url: '/network',
                templateUrl: 'views/config.network.html',
                resolve: {
                    IPS: ['RSCom', function (RSCom) {
                        return RSCom.send("networkInterfaces",{});
                    }]
                },
                controller: 'ConfigNetworkController'
            })
        ;
    }]);