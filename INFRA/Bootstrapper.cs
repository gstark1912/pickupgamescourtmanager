using System.Web.Mvc;
using Microsoft.Practices.Unity;
using IDAL.Context.Interfaces;
using IBLL.Interfaces;
using DAL.Context;
using BLL.Services;
using System.Linq;
using System.Web;
using Unity.WebApi;

namespace INFRA
{
    public static class IoCResolver
    {
        public static IUnityContainer Initialise()
        {
            var container = BuildUnityContainer();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));

            return container;
        }

        public static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();    
            RegisterTypes(container);

            return container;
        }

        public static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<IUnitOfWork, UnitOfWork>(new PerRequestLifetimeManager());
            container.RegisterType<IClientService, ClientService>(); //forcing to load BLL Assembly

            container.RegisterTypes(AllClasses.FromLoadedAssemblies()
                .Where(t => t.Namespace == "BLL.Services"),
                WithMappings.FromMatchingInterface,
                WithName.Default,
                WithLifetime.ContainerControlled);

            container.RegisterTypes(AllClasses.FromLoadedAssemblies().Where(
                t => t.Namespace == "BLL.Validators"),
                WithMappings.FromMatchingInterface,
                WithName.Default,
                WithLifetime.ContainerControlled);

            container.RegisterTypes(AllClasses.FromLoadedAssemblies().Where(
                t => t.Namespace == "DAL.Repositories"),
                WithMappings.FromMatchingInterface,
                WithName.Default,
                WithLifetime.ContainerControlled);

        }
    }
}