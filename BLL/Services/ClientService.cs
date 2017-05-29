using IBLL.Interfaces;
using IDAL.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class ClientService : IClientService
    {
        IClienteRepository _clienteRepository;
        IClienteValidator _clienteValidator;
        public ClientService(IClienteRepository clienteRepository, IClienteValidator clienteValidator)
        {
            _clienteRepository = clienteRepository;
            _clienteValidator = clienteValidator;
        }
        public Cliente Authenticate(string username, string password)
        {
            return _clienteRepository.Authenticate(username, password);
        }

        public Cliente GetClienteById(int clientId)
        {
            return _clienteRepository.GetByID(clientId);
        }

        public bool Insert(Cliente model)
        {
            if (!_clienteValidator.Validate(model).IsValid)
                return false;

            _clienteRepository.Insert(model);
            _clienteRepository.SaveChanges();
            return true;
        }
    }
}
