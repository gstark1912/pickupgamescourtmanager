using INFRA;
using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Unity.WebApi;

namespace API
{
    public static class Bootstrapper
    {
        public static IUnityContainer Initialise()
        {
            return IoCResolver.BuildUnityContainer();
            //GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            //DependencyResolver.SetResolver(new UnityDependencyResolver(container));
            //return container;
        }
    }
}