using IBLL.Interfaces;
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
        public Cliente Authenticate(string username, string password)
        {
            return new Cliente
            {
                IDCliente = 1
            };
        }
    }
}
