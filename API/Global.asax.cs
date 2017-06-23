using API.App_Start;
using API.Models;
using AutoMapper;
using Microsoft.Practices.Unity;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Dependencies;
using System.Web.Http.Dispatcher;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.SessionState;

namespace API
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        private static Guid _unityGuid;
        private static IUnityContainer _container;


        protected void Application_Start()
        {

            _container = Bootstrapper.Initialise();
            _unityGuid = Guid.NewGuid();
            AreaRegistration.RegisterAllAreas();            
            WebApiConfig.Register(GlobalConfiguration.Configuration, _container);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            GlobalConfiguration.Configuration.EnsureInitialized();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Client, ClientViewModel>().ReverseMap();
                cfg.CreateMap<Court, CourtViewModel>().ReverseMap();
                cfg.CreateMap<ClientSchedule, ClientScheduleViewModel>().ReverseMap();
                cfg.CreateMap<CourtType, CourtTypeViewModel>().ReverseMap();
                cfg.CreateMap<FloorType, FloorTypeViewModel>().ReverseMap();
                cfg.CreateMap<Reservation, ReservationViewModel>().ReverseMap();
                cfg.CreateMap<ReservationStatus, ReservationStatusViewModel>().ReverseMap();
            });
        }

        protected void Application_BeginRequest()
        {

            var childContainer = _container.CreateChildContainer();
            HttpContext.Current.Items[_unityGuid] = childContainer;
        }

        protected void Application_EndRequest()
        {
            var childContainer = HttpContext.Current.Items[_unityGuid] as IUnityContainer;
            if (childContainer != null)
            {
                childContainer.Dispose();
                HttpContext.Current.Items.Remove(_unityGuid);
            }
        }

        protected void Application_PostAuthorizeRequest()
        {
            HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Disabled);
        }
    }

    public class UnityDependencyScope : IDependencyScope
    {
        private IUnityContainer _container;
        protected IUnityContainer Container { get { return _container; } }
        public UnityDependencyScope(IUnityContainer container)
        {
            _container = container;
        }
        public void Dispose()
        {
            _container.Dispose();
        }
        public object GetService(Type serviceType)
        {
            return _container.IsRegistered(serviceType)
                        ? _container.Resolve(serviceType)
                        : null;
        }
        public IEnumerable<object> GetServices(Type serviceType)
        {
            return _container.ResolveAll(serviceType);
        }
    }

    public class UnityDependencyResolver : UnityDependencyScope, System.Web.Http.Dependencies.IDependencyResolver
    {
        public UnityDependencyResolver(IUnityContainer container) : base(container)
        {
        }
        public IDependencyScope BeginScope()
        {
            return new UnityDependencyScope(Container.CreateChildContainer());
        }
    }

    public class UnityHttpControllerActivator : IHttpControllerActivator
    {
        private IUnityContainer _container;
        public UnityHttpControllerActivator(IUnityContainer container)
        {
            _container = container;
        }
        public IHttpController Create(HttpRequestMessage request, HttpControllerDescriptor controllerDescriptor, Type controllerType)
        {
            var scope = request.GetDependencyScope();
            return scope.GetService(controllerType) as IHttpController;
        }
    }
}