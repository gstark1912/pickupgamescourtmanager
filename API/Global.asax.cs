using API.App_Start;
using API.Models;
using AutoMapper;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
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
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            Bootstrapper.Initialise();
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            GlobalConfiguration.Configuration.EnsureInitialized();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Client, ClientViewModel>();
                cfg.CreateMap<Court, CourtViewModel>();
                cfg.CreateMap<ClientSchedule, ClientScheduleViewModel>();
                cfg.CreateMap<CourtType, CourtTypeViewModel>();
                cfg.CreateMap<FloorType, FloorTypeViewModel>();
                cfg.CreateMap<Reservation, ReservationViewModel>();
                cfg.CreateMap<ReservationStatus, ReservationStatusViewModel>();
            });
        }

        protected void Application_PostAuthorizeRequest()
        {
            HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Disabled);
        }
    }
}