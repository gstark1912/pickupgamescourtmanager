using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace UI.App_Start
{
    public class BundleConfig
    {
        // Para obtener más información sobre las uniones, consulte http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                                         "~/Scripts/jquery-{version}.js"
                                         ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                                          "~/Scripts/lodash.min.js",
                                          //"~/Scripts/angular.js",
                                          "~/Scripts/angular-animate.min.js",
                                          "~/Scripts/angular-touch.min.js",
                                          "~/Scripts/angular-simple-logger.min.js",
                                          "~/Scripts/angular-route.js",
                                          "~/Scripts/angular-google-maps.min.js",
                                          "~/Scripts/angular-facebook.js",
                                          "~/Scripts/ngGeolocation.min.js"
                                         //"~/Scripts/ui-bootstrap-2.1.2.min.js"
                                         ));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //                            "~/Scripts/bootstrap.js",
            //                            "~/Scripts/ui-bootstrap-tpls-1.3.1.min.js"
            //                            ));

            //bundles.Add(new ScriptBundle("~/bundles/angular/files").Include(
            //                          "~/app/app.js",
            //                          "~/app/controllers/HomeController.js",
            //                          "~/app/controllers/ProjectListController.js",
            //                          "~/app/controllers/ProjectEditController.js",
            //                          "~/app/controllers/ProjectFeatureController.js",
            //                          "~/app/controllers/common/ConfirmationController.js",
            //                          "~/app/services/ProjectServices.js",
            //                          "~/app/services/AuthAPIServices.js",
            //                          "~/app/common/configurationLinks.js"
            //                          ));

            //bundles.Add(new ScriptBundle("~/bundles/angular/files").Include(
            //              "~/app/bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.min.js",
            //              "~/app/src/app.module.js",
            //              "~/app/src/app.config.js",
            //              "~/app/src/js/controllers/main_controller.js",
            //              "~/app/src/js/controllers/HomeController.js",
            //              "~/app/src/js/services/AuthAPIServices.js",
            //              "~/app/src/js/services/configurationLinks.js",
            //              "~/app/src/js/services/MatchesServices.js",
            //              "~/app/src/js/directives/matchResultDirective.js",
            //              "~/app/src/js/controllers/MatchController.js",
            //              "~/app/src/js/services/ValuesServices.js"
            //              ));

            //bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
            //                            "~/Content/bootstrap.css",
            //                            "~/app/bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-hover.css",
            //                            "~/app/bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-base.css",
            //                            "~/app/bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-desktop.css",
            //                            "~/app/src/css/main.css"
            //                            ));
        }

        internal static void RegisterBundles(object bundleTables)
        {
            throw new NotImplementedException();
        }
    }
}