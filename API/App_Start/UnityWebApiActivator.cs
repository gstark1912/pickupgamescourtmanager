using INFRA;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace API.App_Start
{
    public static class UnityWebApiActivator
    {
        public static void Start()
        {
            var container = IoCResolver.BuildUnityContainer();
            ConfigureDependencyResolvers(container);
        }

        private static void ConfigureDependencyResolvers(IUnityContainer container)
        {
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}