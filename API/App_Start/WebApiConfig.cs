using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using API.App_Start;
using API.Infraestructure;

namespace API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Attribute routing enabled
            config.MapHttpAttributeRoutes();

            // Convention-based routing enabled
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = NullValueHandling.Include;
#if DEBUG
            config.MessageHandlers.Add(new PreflightRequestsHandler());
#endif
            var json = config.Formatters.JsonFormatter;

            json.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.None;
            json.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            json.SerializerSettings.Formatting = Formatting.Indented;
            json.SerializerSettings.ContractResolver = new CamelCaseExceptDictionaryKeysResolver(); // Set to serialize property names as camelCase (to fit JavaScript common naming convention)
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            json.SerializerSettings.Converters.Add(new StringEnumConverter()); // Added to serialize Enums as their enum name, not the integer value.
        }
    }
}
