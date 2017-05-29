using API.Filters;
using IBLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("clients")]
    [AuthorizationRequiredAttribute]
    public class ClientController : ApiController
    {
        public ClientController(IClientService c)
        {

        }

        [HttpGet]
        [Route()]
        public int Get()
        {
            return 1;
        }

    }
}
