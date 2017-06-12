using API.Models;
using AutoMapper;
using IBLL.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("lookup")]
    public class LookupController : ApiController
    {
        ICourtTypeService _courtTypeService;
        IFloorTypeService _floorTypeService;
        public LookupController(ICourtTypeService courtTypeService,
            IFloorTypeService floorTypeService)
        {
            _floorTypeService = floorTypeService;
            _courtTypeService = courtTypeService;
        }

        [HttpGet]
        [Route("courttypes")]
        public IHttpActionResult GetCourtTypes()
        {
            var result = _courtTypeService.GetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("floortypes")]
        public IHttpActionResult GetFloorTypes()
        {
            var result = _floorTypeService.GetAll();

            return Ok(result);
        }
    }
}
