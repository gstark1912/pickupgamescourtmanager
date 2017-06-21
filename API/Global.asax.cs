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
                cfg.CreateMap<Client, ClientViewModel>().ReverseMap();
                cfg.CreateMap<Court, CourtViewModel>().ReverseMap();
                cfg.CreateMap<ClientSchedule, ClientScheduleViewModel>().ReverseMap();
                cfg.CreateMap<CourtType, CourtTypeViewModel>().ReverseMap();
                cfg.CreateMap<FloorType, FloorTypeViewModel>().ReverseMap();
                cfg.CreateMap<Reservation, ReservationViewModel>().ReverseMap();
                cfg.CreateMap<ReservationStatus, ReservationStatusViewModel>().ReverseMap();
            });
        }

        protected void Application_PostAuthorizeRequest()
        {
            HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Disabled);
        }
    }
}