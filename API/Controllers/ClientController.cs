﻿using API.Filters;
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
    [RoutePrefix("clients")]
    [AuthorizationRequiredAttribute]
    public class ClientController : ApiController
    {
        IClientService _clienteService;
        public ClientController(IClientService clienteService)
        {
            _clienteService = clienteService;
        }

        [HttpGet]
        [Route("{clientId}")]
        public IHttpActionResult GetCliente(int clientId)
        {
            var cliente = _clienteService.GetClienteById(clientId);

            if (cliente == null)
                return NotFound();

            return Ok(cliente);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult CreateClient(Cliente model)
        {
            var result = _clienteService.Insert(model);

            if (result)
                return Ok();
            else
                return BadRequest();
        }
    }
}
