using System.Web.Mvc;
using Microsoft.Practices.Unity;
using Unity.WebApi;
using System.Linq;
using IDAL.Context.Interfaces;
using IDAL;
using DAL.Context;
using IBLL.Interfaces;
using BLL.Services;
using DAL.Repositories;
using IDAL.Interfaces;
using BLL.Validators;
using System.Web.Compilation;
using System.Reflection;

namespace INFRA
{
    public static class IoCResolver
    {
        public static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();    
            RegisterTypes(container);

            return container;
        }

        private static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<IUnitOfWork, UnitOfWork>(new PerResolveLifetimeManager());
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