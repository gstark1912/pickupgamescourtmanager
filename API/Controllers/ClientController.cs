using API.Filters;
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
    [RoutePrefix("clients")]
    [AuthorizationRequiredAttribute]
    public class ClientController : ApiController
    {
        IClientService _clienteService;
        public ClientController(IClientService clienteService)
        {
            _clienteService = clienteService;
        }

        [HttpPost]
        [Route("")]
        [AdminApiAuthenticationFilter]
        [OverrideActionFiltersAttribute]
        public IHttpActionResult GetClientes(PaginationParameters parameters)
        {
            var clientes = _clienteService.GetClients(parameters);
            var result = new PaginationResult<ClientViewModel>
            {
                TotalCount = clientes.TotalCount,
                TotalPages = clientes.TotalPages,
                Page = clientes.Page,
                Results = Mapper.Map<List<Client>, List<ClientViewModel>>(clientes.Results.ToList())
            };
            return Ok(clientes);
        }

        [HttpGet]
        [Route("admin/{clientId}")]
        [AdminApiAuthenticationFilter]
        [OverrideActionFiltersAttribute]
        public IHttpActionResult GetClienteForAdmin(int clientId)
        {
            var cliente = _clienteService.GetClienteById(clientId);

            if (cliente == null)
                return NotFound();
            return Ok(Mapper.Map<Client, ClientViewModel>(cliente));
        }

        [HttpPost]
        [Route("admin")]
        [AdminApiAuthenticationFilter]
        [OverrideActionFiltersAttribute]
        public IHttpActionResult InsertClienteForAdmin(ClientViewModel model)
        {
            var cliente = _clienteService.InsertAsAdmin(Mapper.Map<ClientViewModel, Client>(model));

            if (!cliente.IsValid)
                return Content(HttpStatusCode.BadRequest, cliente);

            return Ok();
        }

        [HttpPut]
        [Route("admin/{clientId}")]
        [AdminApiAuthenticationFilter]
        [OverrideActionFiltersAttribute]
        public IHttpActionResult UpdateClienteForAdmin(ClientViewModel model)
        {
            var cliente = _clienteService.UpdateAsAdmin(Mapper.Map<ClientViewModel, Client>(model));

            if (!cliente.IsValid)
                return Content(HttpStatusCode.BadRequest, cliente);

            return Ok();
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
        [Route("new")]
        public IHttpActionResult CreateClient(Client model)
        {
            var result = _clienteService.Insert(model);

            if (result.IsValid)
                return Ok();
            else
                return BadRequest();
        }

        [HttpPut]
        [Route("{clientId}")]
        public IHttpActionResult UpdateClient(Client model, int clientId)
        {
            var cliente = _clienteService.UpdateAsAdmin(model);

            if (cliente.IsValid)
                return Ok();
            else
                return Content(HttpStatusCode.BadRequest, cliente);
        }

        [HttpPut]
        [Route("{clientId}/courts/")]
        public IHttpActionResult CreateClientCourts(int clientId, List<Court> courts)
        {
            //var result = _clienteService.UpdateCourts(clientId, courts);

            //if (result)
            return Ok();
            //else
            //return BadRequest();
        }

    }
}
