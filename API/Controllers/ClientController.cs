using API.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("clients")]
    [ApiAuthenticationFilter]
    public class ClientController : ApiController
    {
        public int Get()
        {
            return 1;
        }

    }
}
